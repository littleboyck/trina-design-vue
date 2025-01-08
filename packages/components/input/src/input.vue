<template>
  <div class="tns-input">
    <input type="text" v-model="value" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
defineOptions({
  name: 'TnsInput',
})
const value = ref('text')
</script>
<style scoped lang="less">
.tns-input {
  background-color: red;
  &:hover{
    background-color: blue;
  }
}
</style>