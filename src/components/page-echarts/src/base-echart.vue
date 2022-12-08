<!--
 * @desc: 基础 Echart
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 13:53:25
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 14:45:34
-->

<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

import ChinaJSON from '../data/china.json'

// 注册地图
echarts.registerMap('china', ChinaJSON as any)

interface IProps {
  options: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', {
    renderer: 'canvas'
  })

  // watchEffect 监听 option 变化，重新执行该代码
  watchEffect(() => echartInstance.setOption(props.options))
})
</script>

<style lang="less" scoped>
.echart {
  height: 250px;
}
</style>
