/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:14:45
 * @LastEditors: wc
 * @LastEditTime: 2022-11-22 15:22:46
 */

import hyRequest from '@/service'

// 用户管理
export function getUserList(data: any) {
  return hyRequest.post({
    url: '/users/list',
    data
  })
}
