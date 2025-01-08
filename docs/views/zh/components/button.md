---
category: components
titleTemplate: tn-button
description: Button 按钮
editLink: true
---

{{ $frontmatter.description }}

## 代码演示

#### 按钮类型
* 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

:::demo src=examples/button/base.vue
:::

#### 不可用状态
* 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

:::demo src=examples/button/disabled.vue
:::


#### 加载中状态
* 添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

:::demo src=examples/button/loading.vue
:::

#### 图标案例
* 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
* 如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

:::demo src=examples/button/icon.vue
:::

#### 按钮尺寸
* 按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

:::demo src=examples/button/size.vue
:::

#### 多个按钮组合
* 按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。

:::demo src=examples/button/buttons.vue
:::


#### 危险按钮
* 在 2.2.0 之后，危险成为一种按钮`danger`属性而不是按钮类型。

:::demo src=examples/button/danger.vue
:::

#### block按钮 
* `block` 属性将使按钮适合其父宽度。

:::demo src=examples/button/block.vue
:::