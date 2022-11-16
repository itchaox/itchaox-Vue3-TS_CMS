<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 09:35:22
 * @LastEditors: wangchao
 * @LastEditTime: 2022-11-16 21:36:57
-->
<template>
  <div class="login">
    <div class="login-panel">
      <h1 class="title">Airbnb_CMS</h1>
      <!-- 登录模式标签页 -->
      <el-tabs
        class="tabs"
        v-model="loginModel"
        type="card"
        @tab-click="tabsClick"
      >
        <!-- 1. 帐号登录 -->
        <el-tab-pane name="account">
          <template #label>
            <el-icon :size="20"><UserFilled /></el-icon>
            <span>帐号登录</span>
          </template>
          <el-form
            ref="accountFormRef"
            :model="accountForm"
            :rules="accountFormRules"
            size="large"
          >
            <el-form-item label="帐号" prop="account">
              <el-input
                v-model="accountForm.account"
                placeholder="请输入帐号"
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

        <!-- 2. 手机登录 -->
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <el-icon :size="20"><Iphone /></el-icon>
            <span>手机登录</span>
          </template>
        </el-tab-pane>
      </el-tabs>
      <!-- 操作 -->
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
// 获取组件实例类型: ref<instanceof<typeof Login>>
import { ref, reactive, watch } from 'vue'

import { ElMessage } from 'element-plus'
import type { TabsPaneContext, FormRules, ElForm } from 'element-plus'

import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

const loginModel = ref('account') // 登录模式
const accountForm = reactive({
  account: localCache.getCache('account') ?? '', // 帐号
  password: localCache.getCache('password') ?? '' // 密码
})
// 表单验证规则
const accountFormRules = reactive<FormRules>({
  account: [
    {
      required: true,
      message: '请输入帐号',
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
const isSavePassword = ref<boolean>(
  localCache.getCache('isSavePassword') ?? false
) // 是否记住密码
watch(isSavePassword, (newValue) => {
  localCache.setCache('isSavePassword', newValue)
})
const accountFormRef = ref<InstanceType<typeof ElForm>>() // 帐号表单 ref
const loginStore = useLoginStore()

// 事件
const tabsClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

/**
 * @desc: 登录按钮
 * @author: wc
 */
const loginBtn = () => {
  if (loginModel.value === 'account') {
    accountFormRef.value?.validate((valid) => {
      // 验证通过
      if (valid) {
        // 发送登录接口
        loginStore
          .loginAccountAction({
            name: accountForm.account,
            password: accountForm.password
          })
          .then(() => {
            if (isSavePassword.value) {
              // 记住账号和密码
              localCache.setCache('account', accountForm.account)
              localCache.setCache('password', accountForm.password)
            } else {
              // 不需要记住账号和密码
              localCache.removeCache('account')
              localCache.removeCache('password')
            }
          })
      } else {
        ElMessage.error('请输入正确格式内容')
      }
    })
  } else {
    console.log('手机登录')
  }
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
  height: 345px;
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
}

:deep(.el-tabs__content) {
  height: 120px;
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
