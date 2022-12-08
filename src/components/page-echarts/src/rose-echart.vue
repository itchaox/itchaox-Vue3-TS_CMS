<!--
 * @desc: 基础南丁格尔玫瑰图
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-08 14:55:21
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 15:06:09
-->

<template>
  <div class="rose-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

interface IRoseValueType {
  value: number
  name: string
}

interface IProps {
  roseData: IRoseValueType[]
}
const props = defineProps<IProps>()

// computed 响应式收集数据，当依赖数据发生改变时，则需要更新数据
const options = computed<EChartsOption>(() => ({
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [15, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData,
      label: { show: false }
    }
  ]
}))
</script>
