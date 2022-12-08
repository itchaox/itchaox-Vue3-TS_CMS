/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-08 14:06:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-23 17:16:34
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/index.less'
import store from './store'
import icons from './global/register-icons'

const app = createApp(App)
app.use(icons) // 注册 element-plus icon
app.use(store) // 注册状态




app.use(router) // 注册路由
app.mount('#app') // 挂载页面到 app
