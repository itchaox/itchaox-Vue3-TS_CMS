<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 14:32:05
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 16:53:07
-->

<template>
  <div class="count-card">
    <div class="title">{{ title }}</div>
    <div class="count">{{ number1 }}</div>
    <div>{{ title }} {{ number1 }}</div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
  number1: number
}

defineProps<IProps>()
</script>

<style lang="less" scoped>
.count-card {
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;

  .title {
    color: #00000060;
    margin-bottom: 15px;
  }

  .count {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
