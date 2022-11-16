<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 09:51:44
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 12:34:46
-->
<template>
  <div class="menu">
    <div class="logo">
      <img class="logo-img" src="@/assets/img/logo.png" alt="logo" />
      <div class="logo-title">Airbnb_CMS</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
