/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-24 14:12:13
 * @LastEditors: wc
 * @LastEditTime: 2022-11-24 14:23:22
 */

import hyRequest from '@/service'

/**
 * @desc: 获取角色列表
 * @author: wc
 */
export function getRoleList() {
  return hyRequest.post({
    url: '/role/list'
  })
}

/**
 * @desc: 获取部门列表
 * @author: wc
 */
export function getDepartmentList() {
  return hyRequest.post({
    url: '/department/list'
  })
}
