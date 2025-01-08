<script setup>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Form from './components/Form.vue'
// import Icons from './components/Icons.vue'
const schema = ref({
  title: '搜索表单',
  // dict: ,
  props: {
    maxShowRow: 2,
  },
  formItems: {
    "status": {
      label: "状态1",
      default: "",
      widget: "tn-select",
      props: {
        options: [],
      }
    },
    no2: {
      label: "工号2",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no3: {
      label: "工号3",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no4: {
      label: "工号4",
      default: "123689",
      widget: "tn-input",
      deps: ['status'],
      props: {
        options: [],
      }
    },
    no5: {
      label: "工号5",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no6: {
      label: "工号6",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no7: {
      label: "工号斯蒂7",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no8: {
      label: "工号斯蒂8",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no9: {
      label: "工号斯蒂9",
      default: "123689",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    no10: {
      label: "工号斯蒂10",
      default: "。。。",
      widget: "tn-input",
      props: {
        options: [],
      }
    },
    // no12: {
    //   label: "工号斯蒂12",
    //   default: "123689",
    //   widget: "tn-input",
    //   props: {
    //     options: [],
    //   }
    // }
  }
});
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" />
  <Form />
  <div>
    <tn-button type="primary">Button</tn-button>
    <tns-button>自定义的 button 组件</tns-button>
    <tns-input />
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <Icons />
  </div> -->
  <div style="display: flex;">
    <div style="width: 220px;"></div>
    <div style="padding: 20px;flex: 1">
      <tns-search-form :schema="schema"/>
    </div>
  </div>

  <!-- <tn-form>
    <tn-row :gutter="24">
      <tn-col :span="8">
        <tn-form-item label="姓名">
          <tn-input />
        </tn-form-item>
      </tn-col>
      <tn-col :span="8">
        <tn-form-item label="性别">
          <tn-input />
        </tn-form-item>
      </tn-col>
      <tn-col :span="8">
        <tn-form-item label="抵达">
          <tn-input />
        </tn-form-item>
      </tn-col>
      <tn-col :span="8">
        <tn-form-item label="搜大姐夫">
          <tn-input />
        </tn-form-item>
      </tn-col>
    </tn-row>
  </tn-form> -->
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app{
  padding: 40px;
}
</style>
