<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-08 14:06:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-10 16:30:29
-->
<template>
  <div class="app">
    <h1>app</h1>
    <router-link to="/login">login</router-link><br />
    <router-link to="/main">main</router-link>
    <router-view></router-view>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.app {
  height: 100vh;
  width: 100vw;
  background-color: cornsilk;
}
</style>
