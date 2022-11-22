/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-08 14:06:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-22 11:36:20
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/comment-directive': 'off',
    'vue/no-unused-vars': 'off'
  }
}
