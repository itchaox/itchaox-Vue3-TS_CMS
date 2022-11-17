/*
 * @Desc: 系统管理-用户管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:07:57
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:08:37
 */
const user = () => import('@/views/main/system/user/user.vue')

export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
