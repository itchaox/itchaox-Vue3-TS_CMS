/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 11:10:53
 * @LastEditors: wc
 * @LastEditTime: 2022-11-10 11:30:25
 */

import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 100
  }),

  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },

  actions: {
    changeCounterAction(newCounter: number) {
      console.log(newCounter)
      this.counter += newCounter
    }
  }
})

export default useCounterStore
