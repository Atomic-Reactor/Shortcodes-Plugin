const { development } = require('./reactium-hooks.json');
const Reactium = require('reactium-core/sdk').default;

// if (development) {
//     Reactium.Hook.register(
//         'Server.AppStyleSheets',
//         async (req, AppStyleSheets) => {
//             AppStyleSheets.register('shortcodes', {
//                 path: '/assets/style/shortcodes-editor-plugin.css',
//             });
//         },
//     );
// }
