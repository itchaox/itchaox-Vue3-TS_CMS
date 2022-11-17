/*
 * @Desc: 系统管理-部门管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:09:41
 * @LastEditors: wc
 * @LastEditTime: 2022-11-17 17:09:46
 */

const department = () => import('@/views/main/system/department/department.vue')

export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  children: []
}
