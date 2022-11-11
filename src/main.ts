import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/index.less'
import pinia from './store'
import registerIcons from './global/register-icons'

const app = createApp(App)
app.use(registerIcons) // 注册 element-plus icon
app.use(router)
app.use(pinia)
app.mount('#app')
