<!--
 * @desc: 柱状图
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-08 10:58:51
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 11:19:30
-->

<template>
  <div class="bar-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'

import BaseEchart from './base-echart.vue'

interface IBarValueType {
  name: string
  value: number
}

interface IProps {
  barData: IBarValueType[]
}

const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  const _barData = [...props.barData]
  const _xAxisData = _barData.map((item: any) => (item = item.name))
  const _seriesData = _barData.map((item: any) => (item = item.value))

  return {
    xAxis: {
      type: 'category',
      data: _xAxisData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: _seriesData,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
