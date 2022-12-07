/*
 * @Desc: 统计
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 15:03:06
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 16:15:18
 */

import hyRequest from '@/service'

// 获取统计列表
export function getAmountList() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}

// 获取每个分类商品个数
export function getCategoryCount() {
  return hyRequest.get({
    url: '/goods/category/count'
  })
}

// 获取每个分类商品销量
export function getCategorySale() {
  return hyRequest.get({
    url: '/goods/category/sale'
  })
}

// 获取每个分类收藏
export function getCategoryFavor() {
  return hyRequest.get({
    url: '/goods/category/favor'
  })
}

// 获取销量前10商品数量
export function getSaleTop() {
  return hyRequest.get({
    url: '/goods/sale/top10'
  })
}

// 获取不同城市销售数据
export function getAddressSale() {
  return hyRequest.get({
    url: '/goods/address/sale'
  })
}
