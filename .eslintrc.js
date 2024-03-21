module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  plugins: ['simple-import-sort'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    curly: ['error', 'all'],

    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    'simple-import-sort/imports': [
      'error',
      { groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']] }
    ],
    'simple-import-sort/exports': 'error'
  }
}
