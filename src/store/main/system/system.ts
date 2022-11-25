/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:19:49
 * @LastEditors: wc
 * @LastEditTime: 2022-11-25 13:53:41
 */

import {
  addPageData,
  addUser,
  deletePageData,
  deleteUser,
  editPageData,
  editUser,
  getPageList,
  getUserList
} from '@/service/main/system/system'
import { defineStore } from 'pinia'

interface ISystemState {
  userList: any[]
  userTotalCount: number

  pageList: any[]
  pageTotalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [], // 用户列表
    userTotalCount: 0, // 用户总数

    pageList: [], // 页面列表数据
    pageTotalCount: 0 // 页面数据总数
  }),

  actions: {
    // ! 用户页面请求
    /**
     * @desc: 获取用户列表
     * @param {any} data
     * @author: wc
     */
    async getUserListAction(data: any) {
      const res = await getUserList(data)
      const { list, totalCount } = res.data
      this.userList = list
      this.userTotalCount = totalCount
    },

    /**
     * @desc: 删除用户
     * @param {number} id
     * @author: wc
     */
    async deleteUserAction(id: number) {
      // 1. 删除用户
      await deleteUser(id)

      // 2. 重新请求新数据
      this.getUserListAction({ offset: 0, size: 10 })
    },

    /**
     * @desc: 新增用户
     * @param {any} data
     * @author: wc
     */
    async addUserAction(data: any) {
      // 1. 新增用户
      await addUser(data)

      // 2. 重新请求新数据
      this.getUserListAction({ offset: 0, size: 10 })
    },

    /**
     * @desc: 编辑用户
     * @param {number} id
     * @param {any} data
     * @author: wc
     */
    async editUserAction(id: number, data: any) {
      // 1. 编辑用户
      await editUser(id, data)

      // 2. 重新请求新数据
      this.getUserListAction({ offset: 0, size: 10 })
    },

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
