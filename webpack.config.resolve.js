const path = require('path');

const appDirectory = path.resolve(__dirname, '../../');
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '~app': resolveApp(__dirname, 'app'),
            '~components': resolveApp(__dirname, 'components'),
            '~styles': resolveApp(__dirname, 'styles'),
        },
    },
};
