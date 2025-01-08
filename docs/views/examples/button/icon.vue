<template>
  <tn-space direction="vertical">
    <tn-space warp>
      <tn-tooltip title="search">
        <tn-button type="primary" shape="circle" :icon="h(SearchOutlined)" />
      </tn-tooltip>
      <tn-button type="primary" shape="circle">A</tn-button>
      <tn-button type="primary" :icon="h(SearchOutlined)">Search</tn-button>
      <tn-tooltip title="search">
        <tn-button shape="circle" :icon="h(SearchOutlined)" />
      </tn-tooltip>
      <tn-button :icon="h(SearchOutlined)">Search</tn-button>
    </tn-space>
    <tn-space warp>
      <tn-tooltip title="search">
        <tn-button shape="circle" :icon="h(SearchOutlined)" />
      </tn-tooltip>
      <tn-button :icon="h(SearchOutlined)">Search</tn-button>
      <tn-tooltip title="search">
        <tn-button type="dashed" shape="circle" :icon="h(SearchOutlined)" />
      </tn-tooltip>
      <tn-button type="dashed" :icon="h(SearchOutlined)">Search</tn-button>
      <tn-button :icon="h(SearchOutlined)" href="https://www.google.com" />
    </tn-space>
  </tn-space>
</template>
<script setup>
import { h } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';
</script>

