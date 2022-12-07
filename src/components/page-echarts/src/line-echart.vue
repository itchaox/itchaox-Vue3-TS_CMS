<!--
 * @desc: 折线图
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 16:57:25
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 17:22:24
-->

<template>
  <div class="line-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

interface ILineValueType {
  xAxisData: string[]
  seriesData: number[]
}

interface IProps {
  lineData: ILineValueType
}

const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => ({
  xAxis: {
    type: 'category',
    data: props.lineData.xAxisData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.lineData.seriesData,
      type: 'line'
    }
  ]
}))
</script>

<style lang="less" scoped>
.line-echart {
  color: red;
}
</style>
