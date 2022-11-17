/*
 * @Desc: 系统总览-商品统计
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:06:44
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:06:48
 */

const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')

export default {
  path: '/main/analysis/dashboard',
  name: 'dashboard',
  component: dashboard,
  children: []
}
