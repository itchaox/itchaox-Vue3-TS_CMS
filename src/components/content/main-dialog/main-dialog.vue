<!--
 * @Desc: 弹窗
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-23 11:23:35
 * @LastEditors: wc
 * @LastEditTime: 2022-11-29 17:09:37
-->

<template>
  <div class="main-dialog">
    <el-dialog
      v-model="isShowDialog"
      :title="isAdd ? '新建用户' : '编辑用户'"
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
          <template v-for="item in dialogConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <!-- 普通输入框 -->
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>

              <!-- 密码输入框 -->
              <template v-if="item.type === 'input-password' && isAdd">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  show-password
                ></el-input>
              </template>

              <!-- 日期 -->
              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </template>

              <!-- 下拉菜单 -->
              <template
                v-else-if="item.type === 'select' && item?.options?.length > 0"
              >
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </template>
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
import { reactive, ref } from 'vue'

import useSystemStore from '@/store/main/system/system'
import type { FormRules } from 'element-plus'

interface IProps {
  dialogConfig: {
    pageName: string
    header: {
      addTitle: string
      editTitle: string
    }
    formItems: any[]
  }
}
const props = defineProps<IProps>()

const systemStore = useSystemStore()
const userId = ref(0) // 当前用户id
const isShowDialog = ref(false) // 对话框显隐
const isAdd = ref(true) //是不是新增操作

// 定义表单数据
const initForm: any = {}
for (const item of props.dialogConfig.formItems) {
  initForm[item.prop] = ''
}
let formData = reactive(initForm)

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

  if (isAdd.value) {
    // 新增用户
    systemStore.addPageDataAction(props.dialogConfig.pageName, formData)
  } else {
    // 编辑用户
    systemStore.editPageDataAction(
      props.dialogConfig.pageName,
      userId.value,
      formData
    )
  }
}

/**
 * @desc: 取消按钮
 * @author: wc
 */
function cancel() {
  // 关闭对话框
  isShowDialog.value = false
}

/**
 * @desc: 设置对话框
 * @param { boolean } isNew 是不是新增操作
 * @param { any } itemData 本条数据
 * @author: wc
 */
function setDialog(isNew: boolean = true, itemData?: any) {
  isShowDialog.value = true
  isAdd.value = isNew
  if (!isNew && itemData) {
    // 编辑
    // 回显对话框表单数据
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    userId.value = itemData.id
  } else {
    // 新建
    // 重置对话框表单
    for (const key in formData) {
      formData[key] = ''
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
