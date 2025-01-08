import * as antd from 'ant-design-vue'
import TnsButton from './button'
import TnsInput from './input'
import TnsSearchForm from './searchForm'
import TnsWidgets from './widgets'

// console.log(Object.keys(antd).map(key => 'Tn'+key).join(',\n'));

function isHasOwnProp(obj, prop) {
  return obj.hasOwnProperty(prop);
}
const getComponents = (antd) => {
  const components = Object.entries(antd)
  .filter(([name, component]) => isHasOwnProp(component, 'name'))
  return components.reduce((modules, [name, comp]) => {
    name = 'Tn'+comp.name.slice(1);
    Object.defineProperty(comp, 'name', {
      value: name,
      writable: true, // 表示只读
      configurable: true // 必须为true才能后续修改描述符
    })
    Object.assign(comp, {
      name,
      // 向组件实例传递一个props 属性 prefixCls, 修改类名称前缀
      // props: {
      //   ...comp.props,
      //   prefixCls: {
      //     type: String,
      //     default: 'tn'
      //   }
      // },
      install: (app) => {
        if(comp.isinstall) {
          return;
        }
        comp.isinstall = true;
        app.component(name, comp);
      }
    });
    
    modules[name] = comp;
    return modules;
  }, {});
}

const antvcomponents = {
  ...getComponents(antd)
}

const components = {
  ...antvcomponents,
  TnsButton,
  TnsInput,
  TnsSearchForm,
  TnsWidgets
};

const install = (app) => {
  Object.keys(components).forEach((name) => {
    components.name != 'TnStyleProvider' && app.use(components[name]);
  });
  app.use(components['TnStyleProvider']);
  app.config.globalProperties.$message = antd.message;
  app.config.globalProperties.$notification = antd.notification;
  app.config.globalProperties.$info = antd.Modal.info;
  app.config.globalProperties.$success = antd.Modal.success;
  app.config.globalProperties.$error = antd.Modal.error;
  app.config.globalProperties.$warning = antd.Modal.warning;
  app.config.globalProperties.$confirm = antd.Modal.confirm;
  app.config.globalProperties.$destroyAll = antd.Modal.destroyAll;
  // app.use(components.default)
}

export const { 
  TnAffix,
  TnAlert,
  TnAnchor,
  TnAnchorLink,
  TnApp,
  TnAutoComplete,
  TnAutoCompleteOptGroup,
  TnAutoCompleteOption,
  TnAvatar,
  TnAvatarGroup,
  TnBackTop,
  TnBadge,
  TnBadgeRibbon,
  TnBreadcrumb,
  TnBreadcrumbItem,
  TnBreadcrumbSeparator,
  TnButton,
  TnButtonGroup,
  TnCalendar,
  TnCard,
  TnCardGrid,
  TnCardMeta,
  TnCarousel,
  TnCascader,
  TnCheckableTag,
  TnCheckbox,
  TnCheckboxGroup,
  TnCol,
  TnCollapse,
  TnCollapsePanel,
  TnComment,
  TnCompact,
  TnConfigProvider,
  TnDatePicker,
  TnDescriptions,
  TnDescriptionsItem,
  TnDirectoryTree,
  TnDivider,
  TnDrawer,
  TnDropdown,
  TnDropdownButton,
  TnEmpty,
  TnFlex,
  TnFloatButton,
  TnFloatButtonGroup,
  TnForm,
  TnFormItem,
  TnFormItemRest,
  TnGrid,
  TnImage,
  TnImagePreviewGroup,
  TnInput,
  TnInputGroup,
  TnInputNumber,
  TnInputPassword,
  TnInputSearch,
  TnKeyframes,
  TnLayout,
  TnLayoutContent,
  TnLayoutFooter,
  TnLayoutHeader,
  TnLayoutSider,
  TnList,
  TnListItem,
  TnListItemMeta,
  TnLocaleProvider,
  TnMentions,
  TnMentionsOption,
  TnMenu,
  TnMenuDivider,
  TnMenuItem,
  TnMenuItemGroup,
  TnModal,
  TnMonthPicker,
  TnPageHeader,
  TnPagination,
  TnPopconfirm,
  TnPopover,
  TnProgress,
  TnQRCode,
  TnQuarterPicker,
  TnRadio,
  TnRadioButton,
  TnRadioGroup,
  TnRangePicker,
  TnRate,
  TnResult,
  TnRow,
  TnSegmented,
  TnSelect,
  TnSelectOptGroup,
  TnSelectOption,
  TnSkeleton,
  TnSkeletonAvatar,
  TnSkeletonButton,
  TnSkeletonImage,
  TnSkeletonInput,
  TnSkeletonTitle,
  TnSlider,
  TnSpace,
  TnSpin,
  TnStatistic,
  TnStatisticCountdown,
  TnStep,
  TnSteps,
  TnStyleProvider,
  TnSubMenu,
  TnSwitch,
  TnTabPane,
  TnTable,
  TnTableColumn,
  TnTableColumnGroup,
  TnTableSummary,
  TnTableSummaryCell,
  TnTableSummaryRow,
  TnTabs,
  TnTag,
  TnTextarea,
  TnTheme,
  TnTimePicker,
  TnTimeRangePicker,
  TnTimeline,
  TnTimelineItem,
  TnTooltip,
  TnTour,
  TnTransfer,
  TnTree,
  TnTreeNode,
  TnTreeSelect,
  TnTreeSelectNode,
  TnTypography,
  TnTypographyLink,
  TnTypographyParagraph,
  TnTypographyText,
  TnTypographyTitle,
  TnUpload,
  TnUploadDragger,
  TnWatermark,
  TnWeekPicker
} = antvcomponents;

export { TnsButton, TnsInput, TnsSearchForm, TnsWidgets }

export default {
  install
}

// umd时，需要整合在一起，而在es,lib时，在external中忽略它
export * from '@cztrina/util'

export * from './base/style/css'