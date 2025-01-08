<template>
  <tn-space>
    <tn-button type="primary">Primary</tn-button>
    <tn-button>secondary</tn-button>
    <tn-dropdown>
      <template #overlay>
        <tn-menu @click="handleMenuClick">
          <tn-menu-item key="1">1st item</tn-menu-item>
          <tn-menu-item key="2">2nd item</tn-menu-item>
          <tn-menu-item key="3">3rd item</tn-menu-item>
        </tn-menu>
      </template>
      <tn-button>
        Actions
        <DownOutlined />
      </tn-button>
    </tn-dropdown>
  </tn-space>
</template>
<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
const handleMenuClick = e => {
  alert('click', JSON.stringify(e));
};
</script>

