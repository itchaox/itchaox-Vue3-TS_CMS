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
