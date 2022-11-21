<template>
  <div class="main-form">
    <!-- 表单 -->
    <el-form :model="form" ref="formRef" label-width="100px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="form.name" placeholder="请输入提示文本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="form.realname" placeholder="请输入提示文本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="cellphone">
            <el-input v-model="form.cellphone" placeholder="请输入提示文本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select
              v-model="form.enable"
              placeholder="请选择状态"
              style="width: 100%"
            >
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="form.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- 操作按钮 -->
    <div class="operate">
      <el-button size="large" icon="Refresh" @click="resetForm">重置</el-button>
      <el-button type="primary" size="large" icon="Search" @click="searchForm"
        >查询</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const form = reactive({
  name: '', // 用户名
  realname: '', // 真实姓名
  cellphone: '', // 手机号码
  enable: 1, // 状态
  createAt: [] // 创建时间
})

const formRef = ref<InstanceType<typeof ElForm>>() // 表单 ref

/**
 * @desc: 重置表单
 * @author: wc
 */
const resetForm = () => {
  formRef.value?.resetFields() // 重置表单
}

const searchForm = () => {
  console.log('form', form)
}
</script>

<style lang="less" scoped>
.main-form {
  padding: 20px;
  background-color: #fff;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .operate {
    text-align: right;
  }
}
</style>
