<!--
 * @Desc: 系统管理-用户管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:07:57
 * @LastEditors: wc
 * @LastEditTime: 2022-12-05 09:14:35
-->
<template>
  <div class="user">
    <main-form
      :search-form-config="searchFormConfig"
      @search-click="searchClick"
      @reset-click="resetClick"
    />
    <main-table
      :table-config="tableConfig"
      ref="tableRef"
      @add-click="addClick"
      @edit-click="editClick"
    >
      <template #enableSlot="scope">
        <el-tag
          size="large"
          :type="scope.row[scope.prop] === 1 ? 'success' : 'danger'"
        >
          {{ scope.row[scope.prop] === 1 ? '启用' : '未启用' }}
        </el-tag>
      </template>
    </main-table>
    <main-dialog :dialogConfig="dialogConfigWhole" ref="dialogRef" />
  </div>
</template>

<script setup lang="ts" name="user">
// 公共组件
import MainForm from '@/components/content/main-form/main-form.vue'
import MainTable from '@/components/content/main-table/main-table.vue'
import MainDialog from '@/components/content/main-dialog/main-dialog.vue'

// config
import searchFormConfig from './config/searchFom.config'
import tableConfig from './config/table.config'
import dialogConfig from './config/dialog.config'

// hooks
import usePageTable from '@/hooks/usePageTable'
import usePageDialog from '@/hooks/usePageDialog'
import useUserDialogConfig from '@/hooks/useUserDialogConfig'

const dialogConfigWhole = useUserDialogConfig(dialogConfig) // 获取处理后的 dialogConfig
const { tableRef, searchClick, resetClick } = usePageTable(MainTable) // table 组件 hook
const { dialogRef, addClick, editClick } = usePageDialog(MainDialog) // dialog 组件 hook
</script>
