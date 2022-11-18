/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 11:04:03
 * @LastEditors: wc
 * @LastEditTime: 2022-11-18 10:45:39
 */

import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  // 1. 注册 pinia
  app.use(pinia)

  // 2. 加载本地缓存
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default registerStore
