<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 09:51:44
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 15:17:40
-->
<template>
  <div class="menu">
    <!-- 1. logo -->
    <div class="logo">
      <img class="logo-img" src="@/assets/img/logo.png" alt="logo" />
      <div class="logo-title">Airbnb_CMS</div>
    </div>

    <!-- 2. menu -->
    <template v-for="menuItem in userMenus" :key="menuItem.id">
      <el-menu :default-active="userMenus[0].children[0].id + ''">
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
            <el-menu-item :index="subMenuItem.id + ''">{{
              subMenuItem.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  background-color: #5b88c7;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;

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
</style>
