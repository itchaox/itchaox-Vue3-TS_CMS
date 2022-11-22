<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 14:43:19
 * @LastEditors: wc
 * @LastEditTime: 2022-11-22 14:38:29
-->
<template>
  <div class="main-table">
    <div class="header">
      <h2 class="title">用户列表</h2>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column type="index" label="序号" width="80" align="center" />
        <el-table-column prop="name" label="名字" width="130" align="center" />
        <el-table-column
          prop="realname"
          label="真实姓名"
          width="130"
          align="center"
        />
        <el-table-column
          prop="cellphone"
          label="手机号码"
          width="180"
          align="center"
        />
        <el-table-column prop="enable" label="状态" width="100" align="center">
          <template #default="scope">
            <el-tag
              size="large"
              :type="scope.row.enable === 1 ? 'success' : 'danger'"
            >
              {{ scope.row.enable === 1 ? '启用' : '未启用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作" width="180" align="center">
          <template #default="scope">
            <el-button text type="primary" icon="edit">编辑</el-button>
            <el-button text type="danger" icon="delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">分页</div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'

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
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
  }

  .is-text {
    padding: 0;
  }
  .pagination {
    margin-top: 20px;
  }
}
</style>
