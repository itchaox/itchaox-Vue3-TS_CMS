<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 09:51:44
 * @LastEditors: wc
 * @LastEditTime: 2022-11-22 16:50:16
-->
<template>
  <div class="menu">
    <!-- 1. logo -->
    <div class="logo">
      <img class="logo-img" src="@/assets/img/logo.png" alt="logo" />
      <div v-show="mainStore.isShowAside" class="logo-title">Airbnb_CMS</div>
    </div>

    <!-- 2. menu -->
    <el-menu :default-active="defaultActive" :collapse="!mainStore.isShowAside">
      <template v-for="menuItem in userMenus" :key="menuItem.id">
        <el-sub-menu :index="menuItem.id + ''">
          <template #title>
            <el-icon>
              <!-- 动态组件 component -->
              <component :is="menuItem.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ menuItem.name }}</span>
          </template>
          <template
            v-for="subMenuItem in menuItem.children"
            :key="subMenuItem.id"
          >
            <el-menu-item
              :index="subMenuItem.id + ''"
              @click="changeSubMenuItem(subMenuItem)"
              >{{ subMenuItem.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/store/login/login'
import useMainStore from '@/store/main/main'
import { localCache } from '@/utils/cache'
import { mapPathToMenu } from '@/utils/map-menus'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

const mainStore = useMainStore()

/**
 * @desc: 切换子菜单
 * @param { Object } subMenuItem 子菜单元素
 * @author: wc
 */
const changeSubMenuItem = (subMenuItem: any) => {
  router.push(subMenuItem.url) // 跳转到对应子菜单路由
}

const route = useRoute()
const pathMenu = mapPathToMenu(route.path, userMenus) // 获取路由菜单

const defaultActive = ref(pathMenu.id + '') // 默认菜单导航
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  background-color: #5089f6;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  .logo-img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  .logo-title {
    color: #fff;
    height: 35px;
    line-height: 40px;
    font-size: 24px;
    font-weight: 500;
  }
}

.el-menu {
  background-color: #fff;
}

.el-sub-menu {
  .is-active {
    background-color: #5089f6;
    color: #fff;
  }
}

.el-menu-item {
  background-color: #e4f4ff;
}
</style>
