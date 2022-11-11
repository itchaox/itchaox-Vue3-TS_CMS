/*
 * @Desc: 注册 element-plus icon
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-11 15:21:13
 * @LastEditors: wc
 * @LastEditTime: 2022-11-11 15:30:08
 */
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function registerIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default registerIcons
