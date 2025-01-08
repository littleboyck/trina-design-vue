<template>
  <tn-space direction="vertical">
    <tn-space>
      <tn-button type="primary" loading>Loading</tn-button>
      <tn-button type="primary" size="small" loading>Loading</tn-button>
    </tn-space>
    <tn-space>
      <tn-button type="primary" :loading="loading" @mouseenter="loading = true">
        mouseenter me!
      </tn-button>
      <tn-button type="primary" :loading="iconLoading" @click="enterIconLoading">
        <template #icon><PoweroffOutlined /></template>
        延迟1s
      </tn-button>
    </tn-space>
    <tn-space>
      <tn-button type="primary" loading />
      <tn-button type="primary" shape="circle" loading />
      <tn-button danger shape="round" loading />
    </tn-space>
  </tn-space>
</template>
<script setup>
import { ref } from 'vue';
const loading = ref(false);
const iconLoading = ref(false);
const enterIconLoading = () => {
  iconLoading.value = {
    delay: 1000,
  };
  setTimeout(() => {
    iconLoading.value = false;
  }, 6000);
};
</script>