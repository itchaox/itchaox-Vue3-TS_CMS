<!--
 * @desc: 饼图
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 14:29:11
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 15:46:47
-->

<template>
  <div class="pie-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

interface IPieValueType {
  value: number
  name: string
}

interface IProps {
  pieData: IPieValueType[]
}
const props = defineProps<IProps>()

// computed 响应式收集数据，当依赖数据发生改变时，则需要更新数据
const options = computed<EChartsOption>(() => ({
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
</script>

<style lang="less" scoped>
.pie-echart {
  color: red;
}
</style>
