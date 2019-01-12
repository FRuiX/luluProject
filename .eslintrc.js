// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent":  'off',
    'no-tabs': 0, // 不使用tab换行
    'semi': ['error', 'always'], // 分号必要
    "space-before-function-paren": [0, "always"], // 函数定义时括号前面不要空格
    'vue/script-indent': [
      'error',
      2, // 缩进2个空格
      {
        'baseIndent': 1 // 首行 1*2倍空格(2是缩进的2)
      },
    ]
  }
}
