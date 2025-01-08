<template>
  <tn-space direction="vertical">
    <tn-radio-group v-model:value="size">
      <tn-radio-button value="large">Large</tn-radio-button>
      <tn-radio-button value="default">Default</tn-radio-button>
      <tn-radio-button value="small">Small</tn-radio-button>
    </tn-radio-group>
    <tn-space>
      <tn-button type="primary" :size="size">Primary</tn-button>
      <tn-button :size="size">Normal</tn-button>
      <tn-button type="dashed" :size="size">Dashed</tn-button>
      <tn-button danger :size="size">Danger</tn-button>
      <tn-button type="link" :size="size">Link</tn-button>
    </tn-space>
    <tn-space>
      <tn-button type="primary" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </tn-button>
      <tn-button type="primary" shape="circle" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </tn-button>
      <tn-button type="primary" shape="round" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </tn-button>
      <tn-button type="primary" shape="round" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
      </tn-button>
      <tn-button type="primary" :size="size">
        <template #icon>
          <DownloadOutlined />
        </template>
        Download
      </tn-button>
    </tn-space>
  </tn-space>
</template>
<script setup>
import { ref } from 'vue';
import { DownloadOutlined } from '@ant-design/icons-vue';
const size = ref('large');
</script>