<template>
  <tn-divider orientation="left">Horizontal</tn-divider>
  <tn-row :gutter="16">
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
  </tn-row>
  <tn-divider orientation="left">Responsive</tn-divider>
  <tn-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
  </tn-row>
  <tn-divider orientation="left">Vertical</tn-divider>
  <tn-row :gutter="[16, 24]">
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
    <tn-col class="gutter-row" :span="6">
      <div class="gutter-box">col-6</div>
    </tn-col>
  </tn-row>
</template>

<style scoped>
.gutter-box {
  background: #0092ff;
  padding: 8px 0;
}
</style>
