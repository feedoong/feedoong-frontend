module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['unused-imports'],
  rules: {
    // next/image에서 외부 이미지 가져올 때 에러 발생
    '@next/next/no-img-element': 'off',
    'no-multiple-empty-lines': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling'],
        ],
        pathGroups: [
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
            pattern: './*.style',
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
  settings: {
    'import/external-module-folders': ['.yarn'],
  },
}
