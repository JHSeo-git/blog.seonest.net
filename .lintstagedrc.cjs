const path = require("path")

const buildEslintCommand = (filenames) =>
  `pnpm lint:fix ${filenames.map((f) => `"${path.relative(process.cwd(), f)}"`).join(" ")}`

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
}
