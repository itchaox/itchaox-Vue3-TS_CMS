/*
 * @Desc: 登录接口
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 10:48:23
 * @LastEditors: wc
 * @LastEditTime: 2022-11-14 10:58:09
 */

import hyRequest from '..'

export function accountLogin(data: any) {
  return hyRequest.post({
    url: '/login',
    data
  })
}
