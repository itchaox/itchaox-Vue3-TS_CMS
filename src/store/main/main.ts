/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 16:31:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 16:48:18
 */

import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isShowAside: true // 是否展示侧边栏
  }),

  actions: {
    changeShowAside(isFold: boolean) {
      this.isShowAside = isFold // 修改侧边栏展示状态
    }
  }
})

export default useMainStore
