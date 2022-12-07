<!--
 * @desc: 图表卡片
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 10:41:47
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 14:32:04
-->

<template>
  <div class="chart-card">
    <el-card class="box-card" :header="header ?? '销量展示'">
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header: string
}
defineProps<IProps>()
</script>

<style lang="less" scoped>
.chart-card {
  color: red;
}
</style>
