<template>
  <div class="main-form">
    <!-- 表单 -->
    <el-form label-width="100px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="请输入提示文本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input placeholder="请输入提示文本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码">
            <el-input placeholder="请输入提示文本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select placeholder="请选择状态" style="width: 100%">
              <el-option label="启用" value="1" />
              <el-option label="禁用" value="2" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
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
      <el-button type="warning" size="large">重置</el-button>
      <el-button type="primary" size="large">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
