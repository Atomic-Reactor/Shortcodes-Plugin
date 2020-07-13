
console.log('Shortcodes', '0.0.12');

const path = require('path');

const PLUGIN = {
    ID: 'Shortcodes',
    description: 'Enable Shortcodes to be used in content rich text editor',
    name: 'Shortcodes Plugin',
    order: 100,
    version: {
        actinium: '>=3.2.6',
        plugin: '0.0.2',
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
Actinium.Capability.register('shortcodes.create', {}, 1000);
Actinium.Capability.register('shortcodes.retrieve', {}, 1000);
Actinium.Capability.register('shortcodes.update', {}, 1000);
Actinium.Capability.register('shortcodes.delete', {}, 1000);

/**
 * ----------------------------------------------------------------------------
 * Hook registration
 * ----------------------------------------------------------------------------
 */

// Start: Blueprints
Actinium.Hook.register('start', () => {
    if (!Actinium.Plugin.isActive(PLUGIN.ID)) return;
    const PLUGIN_BLUEPRINTS = require('./blueprints');
    PLUGIN_BLUEPRINTS.forEach(blueprint => Actinium.Blueprint.register(blueprint.ID, blueprint));
});

// Activate: Blueprints
Actinium.Hook.register('activate', ({ ID }) => {
    if (ID !== PLUGIN.ID) return;
    const PLUGIN_BLUEPRINTS = require('./blueprints');
    PLUGIN_BLUEPRINTS.forEach(blueprint => Actinium.Blueprint.register(blueprint.ID, blueprint));
});

// Deactivate: Blueprints
Actinium.Hook.register('dectivate', ({ ID }) => {
    if (ID !== PLUGIN.ID) return;
    const PLUGIN_BLUEPRINTS = require('./blueprints');
    PLUGIN_BLUEPRINTS.forEach(blueprint => Actinium.Blueprint.unregister(blueprint.ID));
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
