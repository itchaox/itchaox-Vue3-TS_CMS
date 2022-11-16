<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 09:35:10
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 21:15:47
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
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <button @click="exitLogin">退出登录1</button> -->
  </div>
</template>

<script setup lang="ts">
// 官方工具
import router from '@/router'

// 公共组件
import mainHeader from '@/components/content/main-header/main-header.vue'
import mainMenu from '@/components/content/main-menu/main-menu.vue'

// 公共方法
import { TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import useMainStore from '@/store/main/main'

const exitLogin = () => {
  // 1. 删除 token
  localCache.removeCache(TOKEN)

  // 2. 跳转至登录页
  router.push('/login')
}

const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-content {
    height: 100%;
  }

  .el-aside {
  }

  .el-header {
    background-color: goldenrod;
  }

  .el-main {
    background-color: antiquewhite;
  }
}
</style>
