/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:19:49
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 11:47:44
 */

import {
  addPageData,
  deletePageData,
  editPageData,
  getPageList
} from '@/service/main/system/system'
import { defineStore } from 'pinia'

interface ISystemState {
  pageList: any[]
  pageTotalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    pageList: [], // 页面列表数据
    pageTotalCount: 0 // 页面数据总数
  }),

  actions: {
    // ! 针对页面数据：增删改查（封装、抽象）

    // * 获取页面列表数据
    async getPageListAction(pageName: string, data: any) {
      const res = await getPageList(pageName, data)
      const { list, totalCount } = res.data
      this.pageList = list
      this.pageTotalCount = totalCount
    },

    // * 删除页面列表某条数据
    async deletePageDataAction(pageName: string, id: number) {
      // 1. 删除数据
      await deletePageData(pageName, id)

      // 2. 重新获取最新数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })
    },

    // * 新增页面列表数据
    async addPageDataAction(pageName: string, data: any) {
      // 1. 新增数据
      await addPageData(pageName, data)

      // 2. 重新获取最新数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })
    },

    // * 编辑页面列表某条数据
    async editPageDataAction(pageName: string, id: number, data: any) {
      // 1. 编辑数据
      await editPageData(pageName, id, data)

      // 2. 重新获取最新数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
