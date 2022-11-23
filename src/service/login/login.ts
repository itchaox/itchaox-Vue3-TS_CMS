/*
 * @Desc: 登录接口
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 10:48:23
 * @LastEditors: wc
 * @LastEditTime: 2022-11-23 10:27:20
 */

import hyRequest from '..'
import type { IAccount } from '@/types'

/**
 * @desc: 登录鉴权
 * @param {IAccount} data 账号密码
 * @author: wc
 */
export function accountLogin(data: IAccount) {
  return hyRequest.post({
    url: '/login',
    data
  })
}

/**
 * @desc: 获取用户信息
 * @param { number } id 用户 id
 * @author: wc
 */
export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: '/users/' + id
  })
}

/**
 * @desc: 获取菜单
 * @param { number } id 用户 id
 * @author: wc
 */
export function getUserMenusByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
