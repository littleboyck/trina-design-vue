<template>
  <tn-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <tn-layout>
      <tn-layout-header :style="headerStyle">Header</tn-layout-header>
      <tn-layout-content :style="contentStyle">Content</tn-layout-content>
      <tn-layout-footer :style="footerStyle">Footer</tn-layout-footer>
    </tn-layout>

    <tn-layout>
      <tn-layout-header :style="headerStyle">Header</tn-layout-header>
      <tn-layout>
        <tn-layout-sider :style="siderStyle">Sider</tn-layout-sider>
        <tn-layout-content :style="contentStyle">Content</tn-layout-content>
      </tn-layout>
      <tn-layout-footer :style="footerStyle">Footer</tn-layout-footer>
    </tn-layout>

    <tn-layout>
      <tn-layout-header :style="headerStyle">Header</tn-layout-header>
      <tn-layout>
        <tn-layout-content :style="contentStyle">Content</tn-layout-content>
        <tn-layout-sider :style="siderStyle">Sider</tn-layout-sider>
      </tn-layout>
      <tn-layout-footer :style="footerStyle">Footer</tn-layout-footer>
    </tn-layout>

    <tn-layout>
      <tn-layout-sider :style="siderStyle">Sider</tn-layout-sider>
      <tn-layout>
        <tn-layout-header :style="headerStyle">Header</tn-layout-header>
        <tn-layout-content :style="contentStyle">Content</tn-layout-content>
        <tn-layout-footer :style="footerStyle">Footer</tn-layout-footer>
      </tn-layout>
    </tn-layout>
  </tn-space>
</template>
<script setup>
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
</script>