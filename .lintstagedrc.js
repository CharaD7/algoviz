// as described in docs - https://nextjs.org/docs/basic-features/eslint#lint-staged
const path = require('path');

// const buildEslintCommand = (filenames) =>
//   `eslint --quiet --fix --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`

const buildEslintCommand = () => `eslint --quiet --fix .`;
// const buildEslintCommand = (filenames) => `eslint --quiet --fix ${filenames.join(' ')}`;

// const buildPrettierCommand = (filenames) =>
//     `prettier --loglevel silent --write --ignore-unknown ${filenames.join(' ')}}`;
const buildPrettierCommand = () => `prettier --loglevel silent --write --ignore-unknown .`;

module.exports = {
    '*.{js,jsx,ts,tsx}': [buildEslintCommand],
    '*.{js,jsx,ts,tsx,css}': [buildPrettierCommand],
};
