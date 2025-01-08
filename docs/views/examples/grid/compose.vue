<template>
  <div id="components-grid-demo-flex">
    <tn-divider orientation="left">sub-element align left</tn-divider>
    <tn-row justify="start">
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
    </tn-row>

    <tn-divider orientation="left">sub-element align center</tn-divider>
    <tn-row justify="center">
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
    </tn-row>

    <tn-divider orientation="left">sub-element align right</tn-divider>
    <tn-row justify="end">
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
    </tn-row>

    <tn-divider orientation="left">sub-element monospaced arrangement</tn-divider>
    <tn-row justify="space-between">
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
    </tn-row>

    <tn-divider orientation="left">sub-element align full</tn-divider>
    <tn-row justify="space-around">
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
    </tn-row>

    <tn-divider orientation="left">sub-element align full</tn-divider>
    <tn-row justify="space-evenly">
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
      <tn-col :span="4">col-4</tn-col>
    </tn-row>
  </div>
</template>

<style lang="less" scoped>
:deep(#components-grid-demo-flex) [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}
</style>
