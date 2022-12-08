module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:import/errors',
        'plugin:import/recommended',
        'plugin:import/warnings',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./jsconfig.json'],
        ecmaVersion: 12,
        sourceTypr: 'module',
    },
    plugins: ['@next/next', 'prettier', 'react'],
    rules: {
        'no-unused-vars': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: {
                exceptions: ['*.module.css'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                map: [
                    ['@app', './app'],
                    ['@components', './components'],
                    ['@styles', './styles'],
                ],
            },
            node: true,
        },
    },
};
