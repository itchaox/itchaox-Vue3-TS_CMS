/*
 * @Desc: 登录
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 11:02:08
 * @LastEditors: wangchao
 * @LastEditTime: 2022-11-17 23:05:02
 */

import { defineStore } from 'pinia'
import {
  accountLogin,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/service/login/login'

import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { TOKEN } from '@/global/constants'
import type { RouteRecordRaw } from 'vue-router'

interface ILoginStore {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginStore => ({
    token: localCache.getCache(TOKEN) ?? '', // 如果有缓存 token, 则直接读取 token
    userInfo: localCache.getCache('userInfo') ?? {}, // 用户信息
    userMenus: localCache.getCache('userMenus') ?? [] // 用户菜单
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1. 帐号登录， 获取 token 等
      const res = await accountLogin(account)
      const id = res.data.id
      this.token = res.data.token

      // 2. 本地缓存 token
      localCache.setCache(TOKEN, this.token)

      // 3. 获取用户详细信息(role 信息)
      const userInfoData = await getUserInfoById(id)
      this.userInfo = userInfoData.data
      localCache.setCache('userInfo', userInfoData.data)

      // 4. 获取菜单树
      const userMenusData = await getUserMenusByRoleId(this.userInfo.role.id)
      this.userMenus = userMenusData.data
      localCache.setCache('userMenus', userMenusData.data)

      /**
       * ! 动态路由思路
       * 1. 获取菜单
       * 2. 将路由对象放入一个路由数组中
       * 3. 根据菜单去匹配路由数组中，应该添加那些路由，到实际加载路由中
       */

      const localRouters: RouteRecordRaw[] = [] // 路由数组
      // 2.1 读取 router/main 中所有 ts 文件
      const files: Record<string, any> = import.meta.glob(
        '../../router/main/**/*.ts',
        {
          eager: true
        }
      ) // eager:true 立即加载文件

      for (const key in files) {
        const module = files[key] // 获取模块
        localRouters.push(module.default) // 向路由数组中添加路由对象
      }
      console.log('localRouters', localRouters)

      // 5. 跳转至 main 页面
      router.push('/main')
    }
  }
})

export default useLoginStore
