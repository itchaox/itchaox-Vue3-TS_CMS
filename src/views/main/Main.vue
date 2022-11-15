<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 09:35:10
 * @LastEditors: wc
 * @LastEditTime: 2022-11-15 17:14:17
-->
<template>
  <div class="main">
    <h1>main</h1>
    <button @click="exitLogin">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

function exitLogin() {
  // 1. 删除 token
  localCache.removeCache(TOKEN)

  // 2. 跳转至登录页
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: blue;
}
</style>
