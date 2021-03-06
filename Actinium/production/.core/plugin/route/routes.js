module.exports = [
    {
        route: '/',
        blueprint: 'Admin',
        meta: {
            builtIn: true,
        },
        capabilities: ['admin-ui.view'],
    },
    {
        route: '/admin',
        blueprint: 'Admin',
        meta: {
            builtIn: true,
        },
        capabilities: ['admin-ui.view'],
    },
    {
        route: '/admin/profile',
        blueprint: 'Profile',
        meta: {
            builtIn: true,
        },
        capabilities: ['admin-ui.view'],
    },
];
