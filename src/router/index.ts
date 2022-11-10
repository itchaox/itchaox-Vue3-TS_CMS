/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-09 17:01:59
 * @LastEditors: wc
 * @LastEditTime: 2022-11-10 16:59:08
 */

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      // redirect: '/main'
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})
export default router
