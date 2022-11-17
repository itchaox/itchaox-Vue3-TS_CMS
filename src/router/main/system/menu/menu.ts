/*
 * @Desc: 系统管理-菜单管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:10:20
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:10:37
 */

const menu = () => import('@/views/main/system/menu/menu.vue')

export default {
  path: '/main/system/menu',
  name: 'menu',
  component: menu,
  children: []
}
