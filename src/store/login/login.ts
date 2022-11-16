/*
 * @Desc: 登录
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 11:02:08
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 15:03:01
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

      // 5. 跳转至 main 页面
      router.push('/main')
    }
  }
})

export default useLoginStore
