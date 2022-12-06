module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  plugins: ['jest', '@next/next', 'prettier', 'react', 'simple-import-sort'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: '@(react)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@components/*',
            group: 'internal',
          },
          {
            pattern: '@pages/*',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
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
};
