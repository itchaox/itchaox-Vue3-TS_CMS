<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 14:43:19
 * @LastEditors: wc
 * @LastEditTime: 2022-11-23 16:34:02
-->
<template>
  <div class="main-table">
    <div class="header">
      <h2 class="title">用户列表</h2>
      <el-button type="primary" @click="addUserClick">新建用户</el-button>
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
            <el-button
              text
              type="danger"
              icon="delete"
              @click="deleteClick(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        :disabled="false"
        layout="total, prev, pager, next, jumper"
        :total="systemStore.userTotalCount"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// 官方依赖
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

// 状态管理
import useSystemStore from '@/store/main/system/system'

// 公共方法
import { formatUTC } from '@/utils/format'
// import { localCache } from '@/utils/cache'

const currentPage = ref(1) // 当前页码
const pageSize = ref(10) // 页面大小

const emit = defineEmits(['addUserClick'])

// 1. 发起 action， 获取 userList 数据
const systemStore = useSystemStore()
getUserList()

// 2. 获取 userList 数据
// storeToRefs() 数据改变时，重新刷新页面
const { userList } = storeToRefs(systemStore)

/**
 * @desc: 页码修改
 * @author: wc
 */
function handleCurrentChange() {
  getUserList()
}

/**
 * @desc: 删除用户
 * @author: wc
 */
async function deleteClick(id: number) {
  systemStore.deleteUserAction(id)
}

function addUserClick() {
  emit('addUserClick', true)
  console.log('addUserClick')
}

/**
 * 网络请求
 */

/**
 * @desc: 获取用户列表
 * @author: wc
 */
function getUserList(formData?: any) {
  // 保存表单搜索条件需要思考下
  // localCache.setCache('formData', formData) // 缓存表格数据
  // const _formData = localCache.getCache('formData') // 获取缓存表格数据
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  systemStore.getUserListAction({
    size,
    offset,
    ...formData
  })
}

// 暴露属性
defineExpose({ getUserList })
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
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
