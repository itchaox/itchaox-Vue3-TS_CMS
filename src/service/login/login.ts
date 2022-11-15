/*
 * @Desc: 登录接口
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 10:48:23
 * @LastEditors: wc
 * @LastEditTime: 2022-11-15 15:45:52
 */

import hyRequest from '..'
import type { IAccount } from '@/types'

export function accountLogin(data: IAccount) {
  return hyRequest.post({
    url: '/login',
    data
  })
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: '/users/' + id
  })
}
