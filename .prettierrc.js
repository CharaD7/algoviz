module.exports = {
    semi: true,
    bracketSpacing: true,
    importOrder: [
        '^@core/(.*)$',
        '<THIRD_PARTY_MODULES>',
        '^@components/(.*)$',
        '^@app/(.*)$',
        '^@styles/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
};
