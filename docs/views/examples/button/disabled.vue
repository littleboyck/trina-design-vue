<template>
  <tn-space direction="vertical">
    <tn-space>
      <tn-button type="primary">Primary</tn-button>
      <tn-button type="primary" disabled>Primary(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button>Default</tn-button>
      <tn-button disabled>Default(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button type="dashed">Dashed</tn-button>
      <tn-button type="dashed" disabled>Dashed(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button type="text">Text</tn-button>
      <tn-button type="text" disabled>Text(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button type="link">Link</tn-button>
      <tn-button type="link" disabled>Link(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button danger>Danger Default</tn-button>
      <tn-button danger disabled>Danger Default(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button danger type="text">Danger Text</tn-button>
      <tn-button danger type="text" disabled>Danger Text(disabled)</tn-button>
    </tn-space>
    <tn-space>
      <tn-button danger type="link">Danger Link</tn-button>
      <tn-button danger type="link" disabled>Danger Link(disabled)</tn-button>
    </tn-space>
    <div :style="{ padding: '8px', background: 'rgb(190, 200, 200)' }">
      <tn-space>
        <tn-button ghost>Ghost</tn-button>
        <tn-button ghost disabled>Ghost(disabled)</tn-button>
      </tn-space>
    </div>
  </tn-space>
</template>


