<!--
 * @Desc: 主页
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 09:35:10
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 11:17:44
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <!-- 侧边栏 -->
      <el-aside :width="mainStore.isShowAside ? '240px' : '64px'">
        <main-menu />
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <main-header />
        </el-header>
        <!-- 主体内容 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// 公共组件
import mainHeader from '@/components/content/main-header/main-header.vue'
import mainMenu from '@/components/content/main-menu/main-menu.vue'

// 公共方法
import useMainStore from '@/store/main/main'

const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-content {
    height: 100%;
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
