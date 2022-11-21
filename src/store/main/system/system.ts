/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 15:19:49
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 15:36:28
 */

import { getUserList } from '@/service/main/system/system'
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
    async getUserListAction() {
      const res = await getUserList({})
      const { list, totalCount } = res.data
      this.userList = list
      this.userTotalCount = totalCount
    }
  }
})

export default useSystemStore