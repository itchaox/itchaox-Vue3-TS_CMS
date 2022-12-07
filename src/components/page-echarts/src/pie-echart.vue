<!--
 * @desc: 饼图
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 14:29:11
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 14:45:19
-->

<template>
  <div class="pie-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'

const options: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
</script>

<style lang="less" scoped>
.pie-echart {
  color: red;
}
</style>
