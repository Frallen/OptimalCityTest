<template>
  <form class="form" @submit.prevent>
    <div class="form-title">
      <Select :options="Prepare(false)" placeholder="Выберите нужное поле" @selectValue="e=>selectValue=e"></Select>
    </div>
    <div class="form-body">
      <div class="form-body-item" v-for="item in Prepare(true)" v-show="item.name===selectValue">
        <FormItem :name="item.name" :id="item.id" :value="item.value"
        ></FormItem>
      </div>
      <button class="button button-primary" type="submit">Ok</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const selectValue = ref<string>()

</script>

<style scoped lang="less">

</style>