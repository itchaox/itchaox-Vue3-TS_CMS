<!--
 * @Desc: 系统管理-用户管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:07:57
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 14:04:13
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
import { computed, ref } from 'vue'

import MainForm from '@/components/content/main-form/main-form.vue'
import MainTable from '@/components/content/main-table/main-table.vue'
import MainDialog from '@/components/content/main-dialog/main-dialog.vue'

import searchFormConfig from './config/searchFom.config'
import tableConfig from './config/table.config'
import dialogConfig from './config/dialog.config'
import useMainStore from '@/store/main/main'

// 完善 dialogConfig 下拉菜单数据
const dialogConfigWhole = computed(() => {
  const { roleList, departmentList } = useMainStore()

  // 重构属性名
  const _roleList = roleList.map((item) => ({
    label: item.name,
    value: item.id
  }))

  const _departmentList = departmentList.map((item) => ({
    label: item.name,
    value: item.id
  }))

  dialogConfig.formItems.forEach((item: any) => {
    // 角色下拉
    if (item.prop === 'roleId') {
      item.options.push(..._roleList)
    }

    // 部门下拉
    if (item.prop === 'departmentId') {
      item.options.push(..._departmentList)
    }
  })
  return dialogConfig
})

const tableRef = ref<InstanceType<typeof MainTable>>()
const dialogRef = ref<InstanceType<typeof MainDialog>>()

/**
 * @desc: 搜索按钮
 * @param { any } formData 表单数据
 * @author: wc
 */
function searchClick(formData: any) {
  tableRef.value?.getPageList(formData)
}

/**
 * @desc: 重置按钮
 * @author: wc
 */
function resetClick() {
  tableRef.value?.getPageList()
}

/**
 * @desc: 新增
 * @author: wc
 */
function addClick() {
  dialogRef.value?.setDialog()
}

/**
 * @desc: 编辑
 * @author: wc
 */
function editClick(itemData: any) {
  dialogRef.value?.setDialog(false, itemData)
}
</script>
