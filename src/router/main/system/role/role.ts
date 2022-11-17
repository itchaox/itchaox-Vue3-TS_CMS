/*
 * @Desc: 系统管理-角色管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:10:58
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:11:17
 */

const role = () => import('@/views/main/system/role/role.vue')

export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  children: []
}
