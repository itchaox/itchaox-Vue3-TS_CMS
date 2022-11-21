/*
 * @Desc:
 * @Version: v1.00
 * @Author: wangchao
 * @Date: 2022-11-10 21:21:17
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 11:14:57
 */
/// <reference types="vite/client" />

// 声明 vue 文件
declare module '*.vue' {
  import { DefaultComponent } from 'vue'
  const component: DefaultComponent
  export default component
}

declare module '*.mjs'
