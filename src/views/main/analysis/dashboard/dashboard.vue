<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:06:44
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 16:52:31
-->
<template>
  <div class="dashboard">
    <el-row :gutter="12">
      <template v-for="item in amountList" :key="item.title">
        <el-col :span="6">
          <count-card v-bind="item" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import CountCard from './cpns/count-card.vue'

import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'

// 请求统计数据接口
const analysisStore = useAnalysisStore()
analysisStore.getWholeAnalysisData()

// 1. 获取统计数据列表
const { amountList } = storeToRefs(analysisStore) // storeToRefs 映射出响应式数据
</script>

<style scoped></style>
