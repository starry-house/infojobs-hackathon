const path = require('node:path')

const generatePaths = (files) =>
  files.map((file) => path.relative(process.cwd(), file))

const joinPaths = (paths) => {
  const SEPARATOR = ' '
  return paths.join(SEPARATOR)
}

/** @type {import('lint-staged').Config} */
module.exports = {
  '*': (files) => {
    const filePaths = joinPaths(generatePaths(files))
    const command = `prettier --write --cache --ignore-unknown ${filePaths}`
    return command
  },
  'src/**/*.{ts,tsx}': (files) => {
    const filePaths = joinPaths(generatePaths(files))
    return `eslint --cache --fix ${filePaths}`
  },
}
