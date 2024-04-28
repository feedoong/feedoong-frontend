module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
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
