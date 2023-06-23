<template>
    <label :for="name">
      <span class="title">Name</span>
      <input :name="name"  type="text" :value="name" readonly class="input">
    </label>
  <label :for="name">
    <span class="title">Value</span>
    <input :name="name" type="text" :value="value" class="input">
  </label>
</template>

<script setup lang="ts">
import {dataType} from "../types/global.types";
const {name, value} = defineProps<dataType>()
</script>

<style scoped lang="less">

</style>