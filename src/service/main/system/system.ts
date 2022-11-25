/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:14:45
 * @LastEditors: wc
 * @LastEditTime: 2022-11-25 13:37:13
 */

import hyRequest from '@/service'

// !用户管理
// 获取用户列表
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
 * @desc: 新增用户
 * @author: wc
 */
export function addUser(data: any) {
  return hyRequest.post({
    url: '/users',
    data
  })
}

/**
 * @desc: 编辑用户
 * @author: wc
 */
export function editUser(id: number, data: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data
  })
}

// ! 针对页面数据的网络请求：增删改改（封装、抽象）

// * 获取页面列表数据
export function getPageList(pageName: string, data: any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data
  })
}

// * 删除页面列表某条数据
export function deletePageData(pageName: string, id: number) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  })
}

// * 新增页面列表数据
export function addPageData(pageName: string, data: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data
  })
}

// * 编辑页面列表某条数据
export function editPageData(pageName: string, id: number, data: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data
  })
}
