<!--
 * @Desc: 弹窗
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-23 11:23:35
 * @LastEditors: wc
 * @LastEditTime: 2022-11-24 17:29:05
-->

<template>
  <div class="main-dialog">
    <el-dialog
      v-model="isShowDialog"
      title="新建角色"
      width="30%"
      center
      @close="cancel"
    >
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
          <el-form-item v-if="isAdd" label="密码" prop="password">
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
              <template v-for="item in roleList" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select
              v-model="formData.departmentId"
              placeholder="请选择部门"
              size="large"
              style="width: 100%"
            >
              <template v-for="item in departmentList" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="confirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import type { FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const isShowDialog = ref(false) // 对话框显隐
const isAdd = ref(true) //是不是新增操作
let formData = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

// 获取角色列表/部门列表
const mainStore = useMainStore()
const { roleList, departmentList } = storeToRefs(mainStore)

// 表单校验规则
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

/**
 * @desc: 确定按钮
 * @author: wc
 */
function confirm() {
  // 关闭对话框
  isShowDialog.value = false

  // 新增用户
  const systemStore = useSystemStore()
  systemStore.addUserAction(formData)

  // * 编辑接口操作

  // 重置对话框表单
  for (const key in formData) {
    formData[key] = ''
  }
}

/**
 * @desc: 取消按钮
 * @author: wc
 */
function cancel() {
  // 关闭对话框
  isShowDialog.value = false

  // 重置对话框表单
  for (const key in formData) {
    formData[key] = ''
  }
}

/**
 * @desc: 设置对话框
 * @param { boolean } isNew 是不是新增操作
 * @param { any } itemData 本条数据
 * @author: wc
 */
function setDialog(isNew = true, itemData?: any) {
  isShowDialog.value = true
  isAdd.value = true
  if (!isNew && itemData) {
    isAdd.value = false
    for (const key in formData) {
      formData[key] = itemData[key]
    }
  }
}

// 暴露属性
defineExpose({ setDialog })
</script>

<style lang="less" scoped>
.main-dialog {
  color: red;
}
</style>
