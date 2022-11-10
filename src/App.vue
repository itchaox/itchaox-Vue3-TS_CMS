<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-08 14:06:51
 * @LastEditors: wc
 * @LastEditTime: 2022-11-10 10:11:12
-->
<template>
  <div class="App">
    <h1>App</h1>
    <router-link to="/login">login</router-link><br />
    <router-link to="/main">main</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.App {
  color: red;
}
</style>
