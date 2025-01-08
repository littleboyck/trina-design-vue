<template>
  <tn-select v-model:value="model">
    <tn-option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</tn-option>
  </tn-select>
</template>
<script setup>
defineOptions({
  name: 'tns-w-select',
});
const emit = defineEmits(['update:value']);
const props = defineProps({
  props: {
    type: Object,
    default: () => ({}),
  },
  value: {
    default: ''
  }
});

const model = computed({
  get() {
    return props.value;
  },
  set(val) {
    emit("update:value", val);
  }
});
</script>