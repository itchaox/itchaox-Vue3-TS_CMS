<!--
 * @desc: 基础 Echart
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-07 13:53:25
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 14:42:54
-->

<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

interface IProps {
  options: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echarts.init(echartRef.value!, 'light', {
    renderer: 'canvas'
  })

  echartInstance.setOption(props.options)
})
</script>

<style lang="less" scoped>
.echart {
  height: 250px;
}
</style>
