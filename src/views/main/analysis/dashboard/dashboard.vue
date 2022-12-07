<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:06:44
 * @LastEditors: wc
 * @LastEditTime: 2022-12-07 17:14:39
-->
<template>
  <div class="dashboard">
    <!-- 1. header -->
    <el-row :gutter="12">
      <template v-for="item in amountList" :key="item.title">
        <el-col :span="6">
          <count-card v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2. content -->
    <el-row :gutter="12">
      <el-col :span="7">
        <chart-card header="分类商品数量（饼图）">
          <pie-echart :pie-data="categoryCountData" />
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card header="不同城市商品销量">3</chart-card>
      </el-col>

      <el-col :span="7">
        <chart-echart header="分类商品数量（玫瑰图）">5</chart-echart>
      </el-col>
    </el-row>

    <!-- 3. footer -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card header="分类商品销量">
          <line-echart />
        </chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card header="分类商品收藏">23</chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import CountCard from './cpns/count-card.vue'
import ChartCard from './cpns/chart-card.vue'
import { PieEchart, LineEchart } from '@/components/page-echarts'

import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// 请求统计数据接口
const analysisStore = useAnalysisStore()
analysisStore.getWholeAnalysisData()

// 1. 获取统计数据列表
const {
  amountList,
  categoryCount,
  categorySale,
  categoryFavor,
  saleTop,
  addressSale
} = storeToRefs(analysisStore) // storeToRefs 映射出响应式数据

const categoryCountData = computed(() => {
  // 重构数据
  return categoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
}
</style>
