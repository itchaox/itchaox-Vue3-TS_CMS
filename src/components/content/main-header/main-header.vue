<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-16 09:52:33
 * @LastEditors: wangchao
 * @LastEditTime: 2022-11-16 22:43:23
-->
<template>
  <div class="header">
    <div class="header-icon" @click="collapseBtn">
      <el-icon v-show="isShowAside"><Fold /></el-icon>
      <el-icon v-show="!isShowAside"><Expand /></el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <!-- 个人信息 -->
      <div class="info">
        <div class="info-icon fx-vc">
          <el-icon class="icon" size="24px"><Service /></el-icon>
          <el-icon class="icon" size="24px"><Message /></el-icon>
          <el-icon class="icon" size="24px"><User /></el-icon>
        </div>
        <div class="info-detail fx-vc">
          <el-dropdown>
            <div class="user-info">
              <el-avatar
                :size="40"
                src="https://www.thefamouspeople.com/profiles/thumbs/hu-ge-2.jpg"
              />
              <div class="user-name">{{ loginStore.userInfo.name }}</div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出系统</el-dropdown-item>
                <el-dropdown-item divided>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useMainStore from '@/store/main/main'
import useLoginStore from '@/store/login/login'

const mainStore = useMainStore()
const isShowAside = ref(true) // 是否展示侧边栏
const collapseBtn = () => {
  isShowAside.value = !isShowAside.value
  mainStore.changeShowAside(isShowAside.value)
}

const loginStore = useLoginStore()
</script>

<style lang="less" scoped>
.header {
  .fx-vc();
  height: 60px;
  line-height: 60px;
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 70px);
}

.header-icon {
  margin-top: 10px;
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
}

.info {
  display: flex;
  height: 60px;
  line-height: 60px;
}

.icon {
  margin-right: 10px;
}

.info-detail {
  margin-left: 10px;
  cursor: pointer;
}

.user-info {
  .fx-vc();

  .user-name {
    margin-left: 10px;
    color: #000;
    font-size: 18px;
    font-weight: 500;
  }
}

// flex 垂直居中
.fx-vc {
  display: flex;
  align-items: center;
}
</style>
