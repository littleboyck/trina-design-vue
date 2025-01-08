<template>
  <div id="components-grid-demo-flex-align">
    <tn-divider orientation="left">Align Top</tn-divider>
    <tn-row justify="center" align="top">
      <tn-col :span="4">
        <p class="height-100">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-50">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-120">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-80">col-4</p>
      </tn-col>
    </tn-row>

    <tn-divider orientation="left">Align Middle</tn-divider>
    <tn-row justify="space-around" align="middle">
      <tn-col :span="4">
        <p class="height-100">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-50">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-120">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-80">col-4</p>
      </tn-col>
    </tn-row>

    <tn-divider orientation="left">Align Bottom</tn-divider>
    <tn-row justify="space-between" align="bottom">
      <tn-col :span="4">
        <p class="height-100">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-50">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-120">col-4</p>
      </tn-col>
      <tn-col :span="4">
        <p class="height-80">col-4</p>
      </tn-col>
    </tn-row>
  </div>
</template>

<style scoped>
:deep(#components-grid-demo-flex-align) [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}
p{
  display: block;
  margin: 0;
  background-color: var(--demo-grid-color-75);
}
.height-120{
  height: 120px;
  line-height: 120px;
}
.height-100{
  height: 100px;
  line-height: 100px;
}
.height-80{
  height: 80px;
  line-height: 80px;
}
.height-50{
  height: 50px;
  line-height: 50px;
} 
</style>
