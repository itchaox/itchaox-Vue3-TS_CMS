<!--
 * @Desc: 系统管理-部门管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:09:41
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 14:58:47
-->

<template>
  <div class="department">
    <main-form
      :search-form-config="searchFormConfig"
      @search-click="searchClick"
      @reset-click="resetClick"
    />
    <main-table
      pageName="department"
      ref="tableRef"
      @add-click="addClick"
      @edit-click="editClick"
    />
    <main-dialog pageName="department" ref="dialogRef" />
  </div>
</template>

<script setup lang="ts" name="department">
import { ref } from 'vue'

import MainForm from '@/components/content/main-form/main-form.vue'
import MainTable from '@/components/content/main-table/main-table.vue'
import MainDialog from '@/components/content/main-dialog/main-dialog.vue'

import searchFormConfig from './config/searchForm.config'

const dialogRef = ref<InstanceType<typeof MainDialog>>()
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
