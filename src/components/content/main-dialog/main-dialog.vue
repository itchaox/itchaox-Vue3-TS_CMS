<!--
 * @Desc: 弹窗
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-23 11:23:35
 * @LastEditors: wc
 * @LastEditTime: 2022-11-24 14:26:08
-->

<template>
  <div class="main-dialog">
    <el-dialog v-model="isShowDialog" title="新建角色" width="30%" center>
      <div class="form">
        <el-form
          size="large"
          :model="formData"
          label-width="100px"
          :rules="dialogFormRules"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="formData.realname"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="formData.cellphone"
              placeholder="请输入手机号码"
            />
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select
              v-model="formData.roleId"
              placeholder="请选择角色"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in mainStore.roleList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              v-model="formData.departmentId"
              placeholder="请选择部门"
              size="large"
              style="width: 100%"
            >
              <el-option
                v-for="item in mainStore.departmentList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
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
import useMainStore from '@/store/main/main'
import type { FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const isShowDialog = ref(true) // 对话框显隐
const formData = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const mainStore = useMainStore()

const dialogFormRules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],

  realname: [
    {
      required: true,
      message: '请输入真实姓名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  cellphone: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    }
  ],
  roleId: [
    {
      required: true,
      message: '请选择角色',
      trigger: 'blur'
    }
  ],
  departmentId: [
    {
      required: true,
      message: '请选择部门',
      trigger: 'blur'
    }
  ]
})

// 暴露属性
defineExpose({ isShowDialog })
</script>

<style lang="less" scoped>
.main-dialog {
  color: red;
}
</style>
