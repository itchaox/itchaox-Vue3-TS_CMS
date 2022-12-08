/*
 * @Desc: 统计
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 15:06:48
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 11:24:28
 */

import {
  getAmountList,
  getCategoryCount,
  getCategorySale,
  getCategoryFavor,
  getSaleTop,
  getAddressSale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IState {
  amountList: any[]
  categoryCount: any[]
  categorySale: any[]
  categoryFavor: any[]
  saleTop: any[]
  addressSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IState => ({
    amountList: [], // 统计数据列表
    categoryCount: [], // 每个分类商品个数
    categorySale: [], // 每个分类商品销量
    categoryFavor: [], // 每个分类收藏
    saleTop: [], // 销量前10商品数量
    addressSale: [] // 不同城市销售数据
  }),

  actions: {
    /**
     * @desc: 获取所有统计数据
     * @author: wc
     */
    getWholeAnalysisData() {
      // ! 此处不需要异步执行请求，因此不使用 async await

      // 1. 获取统计数据列表
      getAmountList().then((res) => {
        this.amountList = res.data
      })

      // 2. 获取每个分类商品个数
      getCategoryCount().then((res) => {
        this.categoryCount = res.data
      })

      // 3. 获取每个分类商品销量
      getCategorySale().then((res) => {
        this.categorySale = res.data
      })

      // 4. 获取每个分类收藏
      getCategoryFavor().then((res) => {
        this.categoryFavor = res.data
      })

      // 5. 获取销量前10商品数量
      getSaleTop().then((res) => {
        this.saleTop = res.data
      })

      // 6. 获取不同城市销售数据
      getAddressSale().then((res) => {
        this.addressSale = res.data
      })
    }
  }
})

export default useAnalysisStore
