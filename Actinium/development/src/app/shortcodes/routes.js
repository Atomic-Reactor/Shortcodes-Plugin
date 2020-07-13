module.exports = [
    {
        blueprint: 'shortcodes',
        route: '/admin/shortcodes',
        meta: {
            admin: true,
            builtIn: false,
        },
        capabilities: ['shortcodes.create'],
    },
];
