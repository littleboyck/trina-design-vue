// import { formProps } from 'ant-design-vue/es/Form'
export const dftFormProps = () => {
  return {
    layout: 'horizontal', // 不推荐使用`inline`布局, 没有做处理
    labelCol: { span: 6 },
    maxShowRow: 1, // 最大可见行数
    colCount: { // 一行表单项列数
      xs: 1, //<576px
      sm: 2, //≥576px
      md: 2, //≥768px
      lg: 3, //≥992px
      xl: 4, //≥1200px
      xxl: 5, //≥1600px
      xxxl: 6, //>1920px
    },
    maxShowItemNum: 4, // 单列时，最大显示的item个数
    isCollapse: true // 是否开启折叠
  }
}