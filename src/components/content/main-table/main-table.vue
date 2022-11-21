<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 14:43:19
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 15:54:42
-->
<template>
  <div class="main-table">
    <div class="header">
      <h2 class="title">用户列表</h2>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">表格</div>
    <div class="pagination">分页</div>
    <ul v-for="item in userList" :key="item.id">
      <li>{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

// 1. 发起 action， 获取 userList 数据
const systemStore = useSystemStore()
systemStore.getUserListAction()

// 2. 获取 userList 数据
// storeToRefs() 数据改变时，重新刷新页面
const { userList } = storeToRefs(systemStore)
</script>

<style lang="less" scoped>
.main-table {
  margin-top: 20px;
  padding: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>
