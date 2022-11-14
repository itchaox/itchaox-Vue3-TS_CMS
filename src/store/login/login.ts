/*
 * @Desc: 登录
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 11:02:08
 * @LastEditors: wc
 * @LastEditTime: 2022-11-14 15:03:04
 */

import { defineStore } from 'pinia'
import { accountLogin } from '@/service/login/login'

import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const LOGIN_TOKEN = 'token' // 多次使用同一字符串, 建议使用常量

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '', // 如果有缓存 token, 则直接读取 token
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLogin(account)
      // 登录成功, 获取 token 等
      if (res.code === 0) {
        this.id = res.data.id
        this.token = res.data.token
        this.name = res.data.name
      }

      // 缓存 token
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default useLoginStore
