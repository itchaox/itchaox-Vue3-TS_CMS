<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:06:44
 * @LastEditors: wc
 * @LastEditTime: 2022-12-08 14:39:14
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
        <chart-card header="不同城市商品销量（地图）">
          <map-echart :map-data="addressSaleData" />
        </chart-card>
      </el-col>

      <el-col :span="7">
        <chart-card header="分类商品数量（玫瑰图）">
          <rose-echart :rose-data="categoryCountData" />
        </chart-card>
      </el-col>
    </el-row>

    <!-- 3. footer -->
    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card header="分类商品销量">
          <line-echart :line-data="categorySaleData" />
        </chart-card>
      </el-col>

      <el-col :span="12">
        <chart-card header="分类商品收藏">
          <bar-echart :bar-data="categoryFavorData" />
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import CountCard from './cpns/count-card.vue'
import ChartCard from './cpns/chart-card.vue'
import {
  PieEchart,
  LineEchart,
  BarEchart,
  MapEchart,
  RoseEchart
} from '@/components/page-echarts'

import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import useMapDataToEchart from '@/hooks/useMapDataToEchart'

// 请求统计数据接口
const analysisStore = useAnalysisStore()
analysisStore.getWholeAnalysisData()

// 1. 获取统计数据列表
const { amountList, categoryCount, categorySale, categoryFavor, addressSale } =
  storeToRefs(analysisStore) // storeToRefs 映射出响应式数据

// 分类商品数量
const categoryCountData = useMapDataToEchart(
  categoryCount,
  'name',
  'goodsCount'
)

// 分类商品销量
const categorySaleData = useMapDataToEchart(categorySale, 'name', 'goodsCount')

// 分类商品收藏
const categoryFavorData = useMapDataToEchart(
  categoryFavor,
  'name',
  'goodsFavor'
)

// 不同城市商品销量
const addressSaleData = useMapDataToEchart(addressSale, 'address', 'count')
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
}
</style>
