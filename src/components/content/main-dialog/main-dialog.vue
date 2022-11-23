<!--
 * @Desc: 弹窗
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-23 11:23:35
 * @LastEditors: wc
 * @LastEditTime: 2022-11-23 16:35:44
-->

<template>
  <div class="main-dialog">
    <el-dialog v-model="isShowDialog" title="Warning" width="30%" center>
      <span>Open the dialog from the center from the screen</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShowDialog = false">取消</el-button>
          <el-button type="primary" @click="isShowDialog = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShowDialog = ref(false) // 对话框显隐

// 暴露属性
defineExpose({ isShowDialog })
</script>

<style lang="less" scoped>
.main-dialog {
  color: red;
}
</style>
