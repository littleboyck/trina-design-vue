<template>
  <div class="tns-button"><slot></slot></div>
</template>
<script setup>
defineOptions({
  name: 'TnsButton',
})
</script>
<style scoped>
.tns-button {
  background-color: green;
}
</style>