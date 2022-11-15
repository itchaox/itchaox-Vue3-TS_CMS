/*
 * @Desc: 登录
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 11:02:08
 * @LastEditors: wc
 * @LastEditTime: 2022-11-15 11:45:58
 */

import { defineStore } from 'pinia'
import { accountLogin } from '@/service/login/login'

import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { TOKEN } from '@/global/constants'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(TOKEN) ?? '', // 如果有缓存 token, 则直接读取 token
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res = await accountLogin(account)
      // 登录成功, 获取 token 等
      this.id = res.data.id
      this.token = res.data.token
      this.name = res.data.name

      // 缓存 token
      localCache.setCache(TOKEN, this.token)

      //! 跳转至 main 页面
      router.push('/main')
    }
  }
})

export default useLoginStore
