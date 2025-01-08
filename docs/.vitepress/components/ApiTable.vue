<template>
 <table class="vp-doc table">
   <thead style="white-space: nowrap;">
    <tr>
      <th v-for="header in data.headers">{{ header }}</th>
    </tr>
   </thead>
   <tbody>
     <tr v-for="row in data.data">
      <td 
        v-for="(cell, index) in row"
        :key="index"
        v-html="(cell || '').replace(/`(.+?)`/g, '<code>$1</code>').replace(/\[(.+?)\]\((.+?)\)/g, `<a href='$2' target='_blank'>$1</a>`)"
      ></td>
    </tr>
   </tbody>
 </table>
</template>
<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  path: {
    type: String,
    required: true
  }
});

const data = ref({});

onMounted(async () => {

  const modules = import.meta.glob('../../public/api/*.json', { eager: true });

  const json = modules[`../../public/${props.path}.json`];

  data.value = json.default;
});
</script>