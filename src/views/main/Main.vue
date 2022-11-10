<!--
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-10 09:35:10
 * @LastEditors: wc
 * @LastEditTime: 2022-11-10 11:29:31
-->
<template>
  <div class="main">
    <h1>main</h1>
    <h2>pinia 计数器: {{ counterStore.counter }}</h2>
    <h2>pinia 计数器2: {{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改计数</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(100)
}
</script>

<style lang="less" scoped>
.main {
  color: blue;
}
</style>
