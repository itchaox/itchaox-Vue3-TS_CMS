<!--
 * @desc: 折线图
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 16:57:25
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 11:19:44
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

interface IPieValueType {
  name: string
  value: number
}

interface IProps {
  lineData: IPieValueType[]
}

const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  // 重构数据
  const _lineData = [...props.lineData]
  const _xAxisData = _lineData.map((item: any) => (item = item.name))
  const _seriesData = _lineData.map((item: any) => (item = item.value))

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
        type: 'line'
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.line-echart {
  color: red;
}
</style>
