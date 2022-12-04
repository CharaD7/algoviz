// as described in docs - https://nextjs.org/docs/basic-features/eslint#lint-staged
const path = require('path')

// const buildEslintCommand = (filenames) =>
//   `eslint --quiet --fix --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`

const buildEslintCommand = (filenames) =>
  `eslint --quiet --fix ${filenames.join(' ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
