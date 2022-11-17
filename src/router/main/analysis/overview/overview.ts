/*
 * @Desc: 系统总览-核心技术
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:03:42
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:05:40
 */

const overview = () => import('@/views/main/analysis/overview/overview.vue')

export default {
  path: '/main/analysis/overview',
  name: 'overview',
  component: overview,
  children: []
}
