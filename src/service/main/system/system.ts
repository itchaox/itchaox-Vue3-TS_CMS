/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:14:45
 * @LastEditors: wc
 * @LastEditTime: 2022-11-24 15:51:03
 */

import hyRequest from '@/service'

// 用户管理
export function getUserList(data: any) {
  return hyRequest.post({
    url: '/users/list',
    data
  })
}

/**
 * @desc: 删除用户
 * @author: wc
 */
export function deleteUser(id: number) {
  return hyRequest.delete({
    url: `/users/${id}`
  })
}

/**
 * @desc: 创建用户
 * @author: wc
 */
export function addUser(data: any) {
  return hyRequest.post({
    url: '/users',
    data
  })
}
