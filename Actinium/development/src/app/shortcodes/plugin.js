const path = require('path');

const PLUGIN = {
    ID: 'Shortcodes',
    description: 'Enable Shortcodes to be used in content rich text editor',
    name: 'Shortcodes Plugin',
    order: 100,
    version: {
        actinium: '>=3.2.6',
        plugin: '0.0.21',
    },
    bundle: [],
    meta: {
        admin: true,
        settings: false,
        builtIn: false,
        group: 'utilities',
    },
};

/**
 * ----------------------------------------------------------------------------
 * Plugin registration
 * ----------------------------------------------------------------------------
 */
Actinium.Plugin.register(PLUGIN, false);

/**
 * ----------------------------------------------------------------------------
 * Asset registration
 * ----------------------------------------------------------------------------
 */
Actinium.Plugin.addScript(
    PLUGIN.ID,
    path.resolve(__dirname, 'plugin-assets/shortcodes-editor.js'),
    true,
);

Actinium.Plugin.addStylesheet(
    PLUGIN.ID,
    path.resolve(__dirname, 'plugin-assets/shortcodes-editor-plugin.css'),
    true,
);

/**
 * ----------------------------------------------------------------------------
 * Capability registration
 * ----------------------------------------------------------------------------
 */
Actinium.Hook.register('before-capability-load', () => {
    if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;
    const allowed = ['contributor', 'moderator'];
    Actinium.Capability.register('shortcodes.create', { allowed });
    Actinium.Capability.register('shortcodes.retrieve', { allowed });
    Actinium.Capability.register('shortcodes.update', { allowed });
    Actinium.Capability.register('shortcodes.delete', { allowed });
    Actinium.Capability.register('setting.shortcodes-get', { allowed });
    Actinium.Capability.register('setting.shortcodes-set', { allowed });
    Actinium.Capability.register('setting.shortcodes-delete', { allowed });
});

/**
 * ----------------------------------------------------------------------------
 * Hook registration
 * ----------------------------------------------------------------------------
 */

// Start: Blueprints
Actinium.Hook.register('start', () => {
    if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;
    const PLUGIN_BLUEPRINTS = require('./blueprints');
    PLUGIN_BLUEPRINTS.forEach(blueprint =>
        Actinium.Blueprint.register(blueprint.ID, blueprint),
    );
});

// Activate: Blueprints
Actinium.Hook.register('activate', ({ ID }) => {
    if (ID !== PLUGIN.ID) return;
    const PLUGIN_BLUEPRINTS = require('./blueprints');
    PLUGIN_BLUEPRINTS.forEach(blueprint =>
        Actinium.Blueprint.register(blueprint.ID, blueprint),
    );
});

// Deactivate: Blueprints
Actinium.Hook.register('dectivate', ({ ID }) => {
    if (ID !== PLUGIN.ID) return;
    const PLUGIN_BLUEPRINTS = require('./blueprints');
    PLUGIN_BLUEPRINTS.forEach(blueprint =>
        Actinium.Blueprint.unregister(blueprint.ID),
    );
});

// Routes
Actinium.Hook.register(
    'route-defaults',
    routes => {
        if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;
        const PLUGIN_ROUTES = require('./routes');
        PLUGIN_ROUTES.forEach(item => routes.push(item));
    },
    100,
);
