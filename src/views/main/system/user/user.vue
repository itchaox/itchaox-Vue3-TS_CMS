<!--
 * @Desc: 系统管理-用户管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:07:57
 * @LastEditors: wc
 * @LastEditTime: 2022-11-25 13:18:02
-->
<template>
  <div class="user">
    <main-form @search-click="searchClick" @reset-click="resetClick" />
    <main-table
      ref="tableRef"
      @add-user-click="addUserClick"
      @edit-user-click="editUserClick"
    />
    <main-dialog ref="dialogRef" />
  </div>
</template>

<script setup lang="ts" name="user">
import { ref } from 'vue'

import MainForm from '@/components/content/main-form/main-form.vue'
import MainTable from '@/components/content/main-table/main-table.vue'
import MainDialog from '@/components/content/main-dialog/main-dialog.vue'

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
 * @desc: 新增用户
 * @author: wc
 */
function addUserClick() {
  dialogRef.value?.setDialog()
}

/**
 * @desc: 编辑用户
 * @author: wc
 */
function editUserClick(itemData: any) {
  dialogRef.value?.setDialog(false, itemData)
}
</script>

<style scoped>
.user {
}
</style>
