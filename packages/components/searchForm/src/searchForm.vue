<template>
  <div class="search-form">
    <div v-if="schema.title" class="search-form-title">{{ schema.title }}</div>
    <!-- 最大可显示数：{{ maxShowFormItemCount }}<br/>
    实际展示数量：{{ Math.min(formNames.length, maxShowFormItemCount) }}<br/>
    操作栏所在行：{{ Math.min(rowNum, formProps.maxShowRow) }}<br/>
    操作栏所在列：{{ Math.min(formNames.length, maxShowFormItemCount) % colNum + 1  }} -->
    <div class="search-form-body">
      <tn-form
        :model="$form"
        v-bind="omit(formProps, ['maxShowRow'])"
      >
        <div
          v-for="(name, index) in formNames"
          :key="name"
          :style="{
            display: index+1 > maxShowFormItemCount ? 'none' : undefined,
            ...setInlineWidth
          }"
        >
          <tn-form-item v-bind="omit(formItems[name], blackKeys)">
            <div class="form-item-content">
              <component 
                :is="formItems[name].widget"
                v-bind="{ props: formItems[name].props, value: formItems[name].default }"
              />
            </div>
          </tn-form-item>
        </div>
        <div :style="{
          'grid-column': colNum,
          'justify-self': 'end'
        }">
          <tn-form-item>
            <tn-space>
              <tn-button type="primary" :icon="h(SearchOutlined)">查询</tn-button>
              <tn-button :icon="h(ReloadOutlined)">重置</tn-button>
              <tn-button v-if="formNames.length > maxShowFormItemCount && isCollapse" type="link" @click="handleShowMore(!isCollapse)">
                展开<DownOutlined />
              </tn-button>
              <tn-button v-if="!isCollapse" type="link" @click="handleShowMore(!isCollapse)">
                收起<UpOutlined />
              </tn-button>
            </tn-space>
          </tn-form-item>
        </div>
      </tn-form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, h, unref, onUnmounted } from 'vue';
import { omit, merge } from "@cztrina/util";
import { DownOutlined, SearchOutlined, ReloadOutlined, UpOutlined } from '@ant-design/icons-vue';
import { dftFormProps } from './dftProp';
defineOptions({
  name: 'TnsSearchForm',
});

//formItem最小宽度，只在form表单layout="horizontal"生效
const cssVar = ref({
  minFormItemWidth: '310px',
  gap: '24px'
})

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  }
});

const schema = computed(() => props.schema);

const formProps = ref(merge(dftFormProps(), {
  ...schema.value.props
}));

const formItems = ref({
  ...schema.value.formItems
});

const isCollapse = ref(formProps.value.isCollapse);

// 原始的最大显示行
const _maxShowRow = formProps.value.maxShowRow;

// 所有表单名
const formNames = ref(Object.keys(unref(formItems)));

const blackKeys = ['widget', 'props', 'default'];

const $form = ref({});

// 一行最多展示的列数
const colNum = ref(0);
// 实际需要展示的行数(包括操作栏)
const rowNum = ref(0);

const clienWidth = ref(document.documentElement.offsetWidth);

let resizeOb = null;
let searchFormEl = null;

// 最多可以排版出的表单项
const maxShowFormItemCount = computed(() => {
  const formPro = unref(formProps);
  // 减去操作栏这一项
  let showFormItemCount = colNum.value * formPro.maxShowRow - 1;
  // 当只有一列时，并且折叠时
  if(colNum.value === 1 && isCollapse.value) {
    // 加上操作栏，才能展示maxShowItemNum个表单项
    showFormItemCount = formPro.maxShowItemNum + 1;
  }
  return showFormItemCount;
});

// `inline`模式时，设置表单项宽度为100%
const setInlineWidth = computed(() => {
  return { width: clienWidth.value < 768 ? '100%' : undefined };
});

// 获取最大列数
function getMaxColCount(searchFormEl) {
  const rect = searchFormEl.getBoundingClientRect();
  let maxColCount = 1;
  if(rect.width < 576) {
    maxColCount = formProps.value.colCount.xs;
  }else if(rect.width < 768) {
    maxColCount = formProps.value.colCount.sm;
  }else if(rect.width < 992) {
    maxColCount = formProps.value.colCount.md;
  }else if(rect.width < 1200) {
    maxColCount = formProps.value.colCount.lg;
  }else if(rect.width < 1600) {
    maxColCount = formProps.value.colCount.xl;
  }else if(rect.width <= 1920) {
    maxColCount = formProps.value.colCount.xxl;
  }else {
    maxColCount = formProps.value.colCount.xxxl;
  }
  return maxColCount;
};

// 获取实际展示的表单项数量
function getActualFormItemCount() {
  return Math.min(formNames.value.length, maxShowFormItemCount.value)
};

// 获取操作栏所在行
function getOperBarRowNum() {
  return Math.min(rowNum.value, formProps.value.maxShowRow)
};

// 获取操作栏所在列
function getOperBarColNum() {
  return getActualFormItemCount() % colNum.value + 1;
}

function handleShowMore(collapse) {
  isCollapse.value = collapse;
  if(!collapse) { // 当改变maxShowRow时，会重新执行maxShowFormItemCount计算属性
    formProps.value.maxShowRow = rowNum.value;
  }else {
    formProps.value.maxShowRow = _maxShowRow;
  }
}

onMounted(() => {
  searchFormEl = document.querySelector('.search-form');
  // 窗口变化观察者
  resizeOb = new ResizeObserver(() => {
    const rect = searchFormEl.getBoundingClientRect();
    const maxColCount = getMaxColCount(searchFormEl);
    console.log('maxColCount: ', maxColCount)
    const minFormItemWidth = (rect.width - parseInt(cssVar.value.gap) * maxColCount) / maxColCount;
    cssVar.value.minFormItemWidth = minFormItemWidth+'px';
    colNum.value = maxColCount;
    rowNum.value = Math.ceil((formNames.value.length+1) / maxColCount);
    // 重新执行`setInlineWidth`计算属性
    clienWidth.value = document.documentElement.offsetWidth;
    // 当展开状态时，屏幕宽度由小变大时，需要重新设置maxShowRow
    if(!isCollapse.value) {
      formProps.value.maxShowRow = rowNum.value;
    }
    return true;
  });
  resizeOb.observe(searchFormEl);
});

onUnmounted(() => {
  resizeOb && resizeOb.unobserve(searchFormEl);
})

// const getColRowCount = useColAndRowCount('.search-form', {
//   itemWidth: parseInt(cssVar.value.minFormItemWidth),
//   gap: parseInt(cssVar.value.gap),
//   formItemsLen: names.length,
// });
// 获取查询表单的行数和列数
// const useColAndRowCount = (selector, options) => {
//   const { itemWidth, gap, formItemsLen } = options;
//   const container = document.querySelector(selector);
//   return () => {
//     const rect = container.getBoundingClientRect();
//     const colNum = Math.min( formItemsLen+1, Math.floor((rect.width + gap) / (itemWidth + gap)) ) || 1;
//     return {
//       colNum,
//       rowNum: Math.ceil((formItemsLen+1) / colNum),
//     }
//   };
// };
</script>
<style scoped lang="less">
.search-form {
  padding: 24px 12px;
  border-radius: 3px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
  .search-form-title {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
  :deep(.ant-form.ant-form-horizontal) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(v-bind('cssVar.minFormItemWidth'), 1fr));
    grid-gap: v-bind('cssVar.gap');
    .ant-form-item{
      margin-bottom: 0;
      margin-inline-end: 0 !important;
    }
    @media (max-width: 575px) {
      grid-gap: 16px;
      .ant-form-item{
        margin-bottom: 0 !important;
        .ant-form-item-label{
          padding: 0 !important;
        }
      }
    }
  }
  :deep(.ant-form-inline) {
    .ant-form-item {
      margin-bottom: 24px;
    }
    @media (max-width: 575px) {
      .ant-form-item{
        margin-bottom: 16px;
        margin-inline-end: 0 !important;
      }
    }
  }
}
</style>