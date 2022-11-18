/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-18 09:42:01
 * @LastEditors: wc
 * @LastEditTime: 2022-11-18 13:30:53
 */

import type { RouteRecordRaw } from 'vue-router'

/**
 * @desc: 加载本地路由
 * @author: wc
 * @return { RouteRecordRaw[] } localRoutes 路由数组
 */
function loadLocalRoutes(): RouteRecordRaw[] {
  const localRoutes: RouteRecordRaw[] = [] // 路由数组
  // 2.1 读取 router/main 中所有 ts 文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  ) // eager:true 立即加载文件

  for (const key in files) {
    const module = files[key] // 获取模块
    localRoutes.push(module.default) // 向路由数组中添加路由对象
  }

  return localRoutes
}

/**
 * ! 动态路由思路
 * 1. 获取菜单
 * 2. 将路由对象放入一个路由数组中
 * 3. 根据菜单去匹配所有路由数组中，应该添加那些路由，到实际加载路由中
 */

export let firstMenu: any = null // 第一个路由

/**
 * @desc: 实现动态路由
 * @param { any[] } userMenus
 * @return { RouteRecordRaw[] } routes 匹配后的路由数组
 * @author: wc
 */
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  // 1. 加载本地路由
  const localRoutes = loadLocalRoutes()

  // 2. 根据菜单去匹配路由数组
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        routes.push(route)
      }

      // 判断获取第一个路由
      if (!firstMenu && route) {
        firstMenu = submenu
      }
    }
  }
  return routes
}

/**
 * @desc: 根据路径去匹配需要显示的菜单
 * @param { string } path 路径
 * @param { any } userMenus 用户菜单
 * @return { any }  子菜单
 * @author: wc
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}
