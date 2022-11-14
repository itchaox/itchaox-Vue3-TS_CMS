/*
 * @Desc: 登录
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-14 11:02:08
 * @LastEditors: wc
 * @LastEditTime: 2022-11-14 11:14:20
 */

import { accountLogin } from '@/service/login/login'
import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: any) {
      const res = await accountLogin(account)
      // 登录成功
      if (res.code === 0) {
        this.id = res.data.id
        this.token = res.data.token
        this.name = res.data.name
      }
    }
  }
})

export default useLoginStore
