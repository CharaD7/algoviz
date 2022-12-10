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
        'plugin:import/recommended',
        'plugin:@next/next/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./jsconfig.json'],
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@next/next', 'prettier', 'react', 'simple-import-sort'],
    root: true,
    rules: {
        'import/first': 'error',
        'import/newline-after-import': ['error'],
        'import/no-unresolved': ['error', { commonjs: true }],
        'import/no-extraneous-dependencies': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '^react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'next/**',
                        group: 'builtin',
                    },
                    {
                        pattern: '~core/**',
                        group: 'internal',
                    },
                    {
                        pattern: '~components/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '~app/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '~styles/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: './**',
                        group: 'sibling',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'no-unused-vars': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['~app', './app'],
                    ['~components', './components'],
                    ['~styles', './styles'],
                ],
                exceptions: ['*.module.css', '.lintstagedrc.js'],
                extensions: ['.js', '.jsx'],
            },
        },
    },
};
