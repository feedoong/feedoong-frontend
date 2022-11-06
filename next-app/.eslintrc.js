const path = require('path')

/** @link https://github.com/import-js/eslint-plugin-import/issues/2164 */
const getExternals = () => {
  const getPackageJson = () =>
    require(path.resolve(process.cwd(), 'package.json'))

  const { dependencies, peerDependencies, devDependencies } = getPackageJson()

  return Object.keys({
    ...dependencies,
    ...peerDependencies,
    ...devDependencies,
  })
}

module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // next/image에서 외부 이미지 가져올 때 에러 발생
    '@next/next/no-img-element': 'off',
    'no-multiple-empty-lines': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling'],
        ],
        pathGroups: [
          ...getExternals().map((name) => ({
            pattern: `${name}`,
            group: 'external',
          })),
          ...getExternals().map((name) => ({
            pattern: `${name}/**`,
            group: 'external',
          })),
          {
            pattern: 'global-style/**',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.constant',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.text',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.styles',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: './*.css',
            group: 'sibling',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'sibling',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
}
