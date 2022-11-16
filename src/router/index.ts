/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-09 17:01:59
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 09:32:55
 */

import { TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to, from) => {
  // 登录成功， 才允许跳转至 main 页面， 否则直接跳转至 login 页面
  if (to.path === '/main') {
    const token = localCache.getCache(TOKEN) // 获取缓存中的 token
    if (!token) {
      // 无 token， 则跳转至 login 页面
      return '/login'
    }
  }
})

export default router
