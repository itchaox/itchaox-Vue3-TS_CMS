/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 15:03:06
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 15:05:31
 */

import hyRequest from '@/service'

export function getAmountList() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}
