const SDK = require('./sdk');
const PLUGIN = require('./info');

const _ = require('underscore');
const op = require('object-path');

Actinium.URL = SDK;

Actinium.Plugin.register(PLUGIN, true);

// content-schema-field-types hook
Actinium.Hook.register('content-schema-field-types', fieldTypes => {
    if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;
    fieldTypes['URLS'] = { type: 'Relation', targetClass: 'Route' };
});

// content-saved hook
Actinium.Hook.register(
    'content-saved',
    async (contentObj, typeObj, isNew, params, options) => {
        if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;

        const contentId = op.get(contentObj, 'objectId');
        const collection = op.get(typeObj, 'collection');

        await SDK.attach({ contentId, collection });
    },
);

// content-before-save hook
Actinium.Hook.register(
    'content-before-save',
    async (content, type, isNew, params, options) => {
        if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;
        let urls = Object.values({ ...op.get(params, 'urls', {}) });
        op.del(params, 'urls');

        const add = urls.filter(
            url => !op.has(url, 'delete') && op.get(url, 'pending') === true,
        );

        const del = urls.filter(url => op.get(url, 'delete') === true);

        const [addURLS, delURLS] = await Promise.all([
            SDK.create({ ...params, content, urls: add }, options),
            SDK.delete({ urls: del }, options),
        ]);

        if (addURLS.length > 0) op.set(params, 'forceUpdate', true);
    },
);

// content-deleted hook
Actinium.Hook.register('afterDelete_content', async ({ object, options }) => {
    if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;

    const contentId = object.id;
    const collection = object.className;

    const { results } = await SDK.list({ collection, contentId });

    const urls = Object.values(results);

    SDK.delete({ urls }, options);
});

// content-trashed hook
Actinium.Hook.register(
    'content-trashed',
    async (contentObj, typeObj, params, options) => {
        if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;

        const contentId = op.get(contentObj, 'objectId');

        SDK.trash({ contentId }, options);
    },
);

// content-restored hook
Actinium.Hook.register(
    'content-restored',
    async (contentObj, typeObj, params, options) => {
        if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;

        const contentId = op.get(contentObj, 'objectId');

        SDK.restore({ contentId }, options);
    },
);

// recycle-query hook
Actinium.Hook.register('recycle-query', async (qry, params, options) => {
    if (op.has(params, 'contentId')) {
        qry.equalTo('object.meta.contentId', params.contentId);
    }

    if (op.has(params, 'route')) {
        qry.equalTo('object.route', params.route);
    }
});

// Cloud functions
Actinium.Cloud.define(PLUGIN.ID, 'url-retrieve', req =>
    SDK.retrieve(req.params, Actinium.Utils.CloudRunOptions(req)),
);

Actinium.Cloud.define(PLUGIN.ID, 'urls', req =>
    SDK.list(req.params, Actinium.Utils.CloudMasterOptions(req)),
);
