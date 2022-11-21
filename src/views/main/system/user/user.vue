<!--
 * @Desc: 系统管理-用户管理
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-17 17:07:57
 * @LastEditors: wc
 * @LastEditTime: 2022-11-21 15:09:18
-->
<template>
  <div class="user">
    <main-form />
    <main-table />
  </div>
</template>

<script setup lang="ts" name="user">
import MainForm from '@/components/content/main-form/main-form.vue'
import MainTable from '@/components/content/main-table/main-table.vue'
</script>

<style scoped>
.user {
}
</style>
