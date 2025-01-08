<template>
  <tn-divider orientation="left">Percentage columns</tn-divider>
  <tn-row>
    <tn-col :flex="2">2 / 5</tn-col>
    <tn-col :flex="3">3 / 5</tn-col>
  </tn-row>
  <tn-divider orientation="left">Fill rest</tn-divider>
  <tn-row>
    <tn-col flex="100px">100px</tn-col>
    <tn-col flex="auto">auto</tn-col>
  </tn-row>
  <tn-divider orientation="left">Raw flex style</tn-divider>
  <tn-row>
    <tn-col flex="1 1 200px">1 1 200px</tn-col>
    <tn-col flex="0 1 300px">0 1 300px</tn-col>
  </tn-row>
  <tn-row :wrap="false">
    <tn-col flex="none">
      <div style="padding: 0 16px">none</div>
    </tn-col>
    <tn-col flex="auto">auto with no-wrap</tn-col>
  </tn-row>
</template>


