<template>
  <vSelect class="select" v-model="Option" :placeholder="placeholder" :searchable="false"
           :options="options"></vSelect>
</template>

<script setup lang="ts">
import vSelect from 'vue-select'
import {SelectFilterType} from "../types/global.types";

interface propsType {
  options: SelectFilterType[],
  placeholder: string
}

const {options, placeholder} = defineProps<propsType>()

const Option = ref<SelectFilterType>()

const emit = defineEmits<{ (e: "selectValue", Value: string): void }>()

watch(Option, () => {
  let value = Option.value ? Option.value.sort : ""
  emit("selectValue", value)
})
</script>

<style scoped lang="less">
</style>