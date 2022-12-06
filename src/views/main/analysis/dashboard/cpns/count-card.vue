<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-12-06 14:32:05
 * @LastEditors: wc
 * @LastEditTime: 2022-12-06 17:28:38
-->

<template>
  <div class="count-card">
    <div class="title">{{ title }}</div>
    <div class="count" ref="number1Ref">{{ number1 }}</div>
    <div>
      <span>
        {{ title }}
      </span>
      <span ref="number2Ref">
        {{ number1 }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { onMounted, ref } from 'vue'

interface IProps {
  amount: string
  title: string
  number1: number
}

const props = defineProps<IProps>()

const number1Ref = ref<HTMLElement>()
const number2Ref = ref<HTMLElement>()

const countOption = {
  prefix: props.amount === 'saleroom' ? '¥' : ''
}
onMounted(() => {
  const countup1 = new CountUp(number1Ref.value!, props.number1, countOption)
  const countup2 = new CountUp(number2Ref.value!, props.number1, countOption)

  countup1.start()
  countup2.start()
})
</script>

<style lang="less" scoped>
.count-card {
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;

  .title {
    color: #00000060;
    margin-bottom: 15px;
  }

  .count {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
