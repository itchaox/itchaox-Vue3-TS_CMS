<!--
 * @Desc: 主页-表单
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-08 14:06:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 11:15:38
-->
<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style lang="less" scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>
