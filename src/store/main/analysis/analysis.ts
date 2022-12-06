/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 15:06:48
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 16:39:36
 */

import { getAmountList } from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IState {
  amountList: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IState => ({
    amountList: [] // 统计数据列表
  }),

  actions: {
    /**
     * @desc: 获取所有统计数据
     * @author: wc
     */
    async getWholeAnalysisData() {
      // 1. 获取统计数据列表
      const res = await getAmountList()
      this.amountList = res.data
    }
  }
})

export default useAnalysisStore
