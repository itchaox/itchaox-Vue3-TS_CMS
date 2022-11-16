<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 09:52:33
 * @LastEditors: wc
 * @LastEditTime: 2022-11-16 16:52:34
-->
<template>
  <div class="header">
    <div class="header-icon" @click="collapseBtn">
      <el-icon v-show="isShowAside"><Fold /></el-icon>
      <el-icon v-show="!isShowAside"><Expand /></el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="info">个人信息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useMainStore from '@/store/main/main'

const mainStore = useMainStore()
const isShowAside = ref(true) // 是否展示侧边栏
const collapseBtn = () => {
  isShowAside.value = !isShowAside.value
  mainStore.changeShowAside(isShowAside.value)
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  line-height: 60px;
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 70px);
}

.header-icon {
  margin-top: 10px;
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
}
</style>
