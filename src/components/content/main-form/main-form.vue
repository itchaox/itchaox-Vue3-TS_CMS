<template>
  <div class="main-form">
    <!-- 表单 -->
    <el-form :model="form" ref="formRef" label-width="100px">
      <el-row :gutter="20">
        <template v-for="item in searchFormConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <!-- 输入框 -->
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="form[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>

              <!-- 日期 -->
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="form[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </template>

              <!-- 下拉菜单 -->
              <template
                v-if="item.type === 'select' && item.options.length > 0"
              >
                <el-select
                  v-model="form[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
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

// props 属性
interface IProps {
  searchFormConfig: {
    formItems: any[]
  }
}

const props = defineProps<IProps>()

// 自定义事件
const emit = defineEmits(['searchClick', 'resetClick'])

// 定义表单数据
const initForm: any = {}
for (const item of props.searchFormConfig.formItems) {
  initForm[item.prop] = ''
}
const form = reactive(initForm)

const formRef = ref<InstanceType<typeof ElForm>>() // 表单 ref

/**
 * @desc: 重置表单
 * @author: wc
 */
const resetForm = () => {
  formRef.value?.resetFields() // 重置表单
  emit('resetClick')
}

/**
 * @desc: 查询表单
 * @author: wc
 */
const searchForm = () => {
  emit('searchClick', form)
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
