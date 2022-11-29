<!--
 * @Desc: 公共表格组件
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-21 14:43:19
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 09:53:47
-->
<template>
  <div class="main-table">
    <!-- 头部 -->
    <div class="header">
      <h2 class="title">{{ tableConfig?.header?.title ?? '数据列表' }}</h2>
      <el-button type="primary" @click="addClick">{{
        tableConfig?.header?.btnTitle ?? '新建数据'
      }}</el-button>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <template v-for="item in tableConfig.tableItems" :key="item.prop">
          <!-- 自定义类型 -->
          <template v-if="item.type === 'custom'">
            <el-table-column v-bind="item" align="center">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop" />
              </template>
            </el-table-column>
          </template>

          <!-- 时间类型 -->
          <template v-else-if="item.type === 'timer'">
            <el-table-column v-bind="item" align="center">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>

          <!-- 操作类型  -->
          <template v-else-if="item.type === 'operate'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-button
                  text
                  type="primary"
                  icon="edit"
                  @click="editClick(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  text
                  type="danger"
                  icon="delete"
                  @click="deleteClick(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </template>

          <!-- 普通类型 -->
          <template v-else>
            <el-table-column v-bind="item" align="center" />
          </template>
        </template>
      </el-table>
    </div>

    <!-- 分页器  -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        :disabled="false"
        layout="total, prev, pager, next, jumper"
        :total="pageTotalCount"
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

interface IProps {
  tableConfig: {
    pageName: string
    header?: {
      title: string
      btnTitle: string
    }
    tableItems: any[]
  }
}
const props = defineProps<IProps>()
const emit = defineEmits(['addClick', 'editClick'])

// 1. 发起 action， 获取 pageList 数据
const systemStore = useSystemStore()
getPageList()

// 2. 获取 pageList 数据
// storeToRefs() 数据改变时，重新刷新页面
const { pageList, pageTotalCount } = storeToRefs(systemStore)

/**
 * @desc: 页码修改
 * @author: wc
 */
function handleCurrentChange() {
  getPageList()
}

/**
 * @desc: 删除
 * @author: wc
 */
async function deleteClick(id: number) {
  systemStore.deletePageDataAction(props.tableConfig.pageName, id)
}

/**
 * @desc: 编辑
 * @author: wc
 */
function editClick(itemData: any) {
  emit('editClick', itemData)
}

/**
 * @desc: 新增
 * @author: wc
 */
function addClick() {
  emit('addClick', true)
}

/**
 * !网络请求
 */

/**
 * @desc: 获取用户列表
 * @author: wc
 */
function getPageList(formData?: any) {
  // 保存表单搜索条件需要思考下
  // localCache.setCache('formData', formData) // 缓存表格数据
  // const _formData = localCache.getCache('formData') // 获取缓存表格数据
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const params = {
    size,
    offset,
    ...formData
  }
  systemStore.getPageListAction(props.tableConfig.pageName, params)
}

// 暴露属性
defineExpose({ getPageList })
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
