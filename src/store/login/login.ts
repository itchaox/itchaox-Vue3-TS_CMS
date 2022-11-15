/*
 * @Desc: 登录
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 11:02:08
 * @LastEditors: wc
 * @LastEditTime: 2022-11-15 16:23:11
 */

import { defineStore } from 'pinia'
import { accountLogin, getUserInfoById } from '@/service/login/login'

import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { TOKEN } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache(TOKEN) ?? '', // 如果有缓存 token, 则直接读取 token
    userInfo: {} // 用户信息
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLogin(account) // 获取登录信息
      // 登录成功, 获取 token 等
      const id = res.data.id
      const name = res.data.name
      this.token = res.data.token

      // 缓存 token
      localCache.setCache(TOKEN, this.token)

      const userInfoData = await getUserInfoById(id) // 获取用户信息(role 信息)
      this.userInfo = userInfoData.data

      //! 跳转至 main 页面
      router.push('/main')
    }
  }
})

export default useLoginStore
