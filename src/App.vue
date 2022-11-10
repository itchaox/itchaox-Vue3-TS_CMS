<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-08 14:06:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-10 17:09:13
-->
<template>
  <div class="app">
    <!-- <router-link to="/login">login</router-link> -->
    <!-- <router-link to="/main">main</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>
