/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:14:45
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 15:17:51
 */

import hyRequest from '@/service'

// 用户管理
export function getUserList(data) {
  return hyRequest.post({
    url: '/users/list',
    data
  })
}
