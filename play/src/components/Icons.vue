<template>
  <tn-space>
    <smile-two-tone />
    <heart-two-tone two-tone-color="#eb2f96" />
    <check-circle-two-tone two-tone-color="#52c41a" />
    <icon>
      <template #component><HomeOutlined /></template>
    </icon>
  </tn-space>
</template>
<script setup>
import Icon, { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone, HomeOutlined } from '@ant-design/icons-vue';
</script>
<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>