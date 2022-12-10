const path = require('path');

const appDirectory = path.resolve(__dirname, '../../');
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    compilerOptions: {
        jsx: 'preserve',
        baseUrl: '.',
        paths: {
            '~app': resolveApp(__dirname, 'app'),
            '~components': resolveApp(__dirname, 'components'),
            '~pages': resolveApp(__dirname, 'pages'),
            '~styles': resolveApp(__dirname, 'styles'),
        },
    },
    exclude: ['node_modules', '.next'],
    moduleResolution: 'node',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '~app': resolveApp(__dirname, 'app'),
            '~components': resolveApp(__dirname, 'components'),
            '~styles': resolveApp(__dirname, 'styles'),
        },
    },
};
