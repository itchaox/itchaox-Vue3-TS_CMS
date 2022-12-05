/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 16:31:51
 * @LastEditors: wc
 * @LastEditTime: 2022-12-05 09:35:29
 */

import {
  getDepartmentList,
  getMenuList,
  getRoleList
} from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  isShowAside: boolean
  roleList: any[]
  departmentList: any[]
  menuList: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    isShowAside: true, // 是否展示侧边栏
    roleList: [], // 角色列表
    departmentList: [], // 部门列表
    menuList: [] // 菜单列表
  }),

  actions: {
    changeShowAside(isFold: boolean) {
      this.isShowAside = isFold // 修改侧边栏展示状态
    },

    async getAllTitleListAction() {
      const roleResult = await getRoleList()
      const departmentResult = await getDepartmentList()
      const menuResult = await getMenuList()

      this.roleList = roleResult.data.list
      this.departmentList = departmentResult.data.list
      this.menuList = menuResult.data.list
    }
  }
})

export default useMainStore
