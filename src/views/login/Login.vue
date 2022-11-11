<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 09:35:22
 * @LastEditors: wc
 * @LastEditTime: 2022-11-11 13:55:57
-->
<template>
  <div class="login">
    <div class="login-panel">
      <h1 class="title">Airbnb_CMS</h1>
      <el-tabs
        class="tabs"
        v-model="loginModel"
        type="card"
        @tab-click="tabsClick"
      >
        <el-tab-pane label="账号登录" name="account">
          <el-form :model="accountForm" :rules="accountFormRules">
            <el-form-item label="账号" prop="account">
              <el-input
                v-model="accountForm.account"
                placeholder="请输入账号"
              />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="accountForm.password"
                type="password"
                placeholder="请输入密码"
                show-password
              />
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">手机登录</el-tab-pane>
      </el-tabs>
      <div class="operate">
        <el-checkbox v-model="isSavePassword" label="记住密码" size="large" />
        <div class="forgot-password">忘记密码</div>
      </div>
      <el-button class="login-btn" type="primary" @click="loginBtn"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TabsPaneContext, FormRules } from 'element-plus'

const loginModel = ref('account') // 登录模式
const accountForm = reactive({
  account: '', // 账号
  password: '' // 密码
})
// 表单验证规则
const accountFormRules = reactive<FormRules>({
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})
const isSavePassword = ref(false) // 是否记住密码

const tabsClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const loginBtn = () => {
  console.log('点击登录按钮')
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.jpg');
  background-size: cover;
}

.login-panel {
  width: 330px;
  height: 330px;
  padding: 24px;
  background-color: #fdfdf9;
  text-align: center;
  border-radius: 10px;
}

.title {
  margin-bottom: 20px;
}

.tabs {
  margin-bottom: 5px;
  padding: 5px 16px 16px 16px;
  border: 1px solid #cccccc60;
  border-radius: 4px;
}

:deep(.el-tabs__nav) {
  width: 100%;
  border: none !important;
}

:deep(.el-tabs__header) {
  border: none !important;
}

:deep(.el-tabs__item) {
  width: 50%;
  font-size: 16px;
  text-align: center;
}

.operate {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.forgot-password {
  height: 40px;
  line-height: 40px;
  color: #409eff;
  cursor: pointer;
}

.login-btn {
  width: 100%;
  height: 40px;
  font-size: 20px;
}
</style>
