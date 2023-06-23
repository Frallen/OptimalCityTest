<template>
  <label :for="name" class="form-body-item">
    <span class="title">{{ name }}</span>
    <input :name="name" :id="id" type="text" @input="inputValue" class="input">
  </label>
</template>

<script setup lang="ts">
import {dataType} from "../types/global.types";

const {name, value, id} = defineProps<dataType>()

const inputValue = ref<string>(value)



</script>

<style scoped lang="less">

</style>