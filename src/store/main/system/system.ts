/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:19:49
 * @LastEditors: wc
 * @LastEditTime: 2022-11-24 15:58:45
 */

import { addUser, deleteUser, getUserList } from '@/service/main/system/system'
import { defineStore } from 'pinia'

interface ISystemState {
  userList: any[]
  userTotalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [], // 用户列表
    userTotalCount: 0 // 用户总数
  }),

  actions: {
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
    }
  }
})

export default useSystemStore
