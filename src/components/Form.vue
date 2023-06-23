<template>
  <form class="form" @submit.prevent>
    <div class="form-title">
      <Select :options="Prepare(false)" placeholder="Выберите нужное поле" @selectValue="e=>selectValue=e"></Select>
    </div>
    <div class="form-body">
        <FormItem :name="data.name" :id="data.id" :value="data.value" v-if="data&&Object.keys(data).length>0"></FormItem>
      <button class="button button-primary" type="submit">Ok</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {dataType} from "../types/global.types";

const selectValue = ref<string>()

const data = computed(() => {
  return Prepare<dataType>(true).find(p => p.name === selectValue.value)
})

</script>

<style scoped lang="less">

</style>