---
category: components
titleTemplate: tn-grid
description: Grid 栅格
editLink: true
---

{{$frontmatter.description}}

![栅格](/assets/grid.svg)

<!-- <div class="language-icon" style="width: 40px;height: 40px;"></div> -->

## 设计理念
在多数业务情况下，Ant Design Vue 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述
布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

* 通过`row`在水平方向建立一组`column`（简写 col）
* 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
* 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `` 来创建
* 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列


## 代码演示

#### 基础栅格
* 从堆叠到水平排列。
* 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（`Col`）必须放在 `Row` 内。
<div class="grid-demo">

:::demo src=examples/grid/base.vue
:::

</div>

#### 区块间隔
* 栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(`n` 是自然数)。
* 如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。
* 如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距] [16, { xs: 8, sm: 16, md: 24, lg: 32 }]`。

:::demo src=examples/grid/space.vue
:::

#### 左右偏移
* 列偏移。
* 使用 `offset` 可以将列向右侧偏。例如， `offset={4}` 将元素向右侧偏移了 `4` 个列（`column`）的宽度。
<div class="grid-demo">

:::demo src=examples/grid/offset.vue
:::

</div>

#### 排版
* 布局基础。
* 子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
<div class="grid-demo grid-demo-rowbg">

:::demo src=examples/grid/compose.vue
:::

</div>

#### 对齐
* 子元素垂直对齐。
<div class="grid-demo-rowbg"> 

:::demo src=examples/grid/align.vue
:::

</div>


#### 栅格排序
* 列排序。
* 通过使用 `push` 和 `pull` 类就可以很容易的改变列（`column`）的顺序。
<div class="grid-demo">

:::demo src=examples/grid/sort.vue
:::

</div>


#### Flex 填充
* 以简单配置几种等分栅格和间距。
<div class="grid-demo">

:::demo src=examples/grid/flex.vue
:::

</div>

#### 栅格配置器
* 以简单配置几种等分栅格和间距。

:::demo src=examples/grid/config.vue
:::



#### API

###### Row

<api-table path="api/grid" />