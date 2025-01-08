export function tnsResolver() {
  return (name) => {
    // if(/^(Icon|Acu)$/.test(name)) {
    //   return {
    //     name,
    //     from: "@ant-design/icons-vue"
    //   }
    // }
    const path = '@cztrina/design-vue/es';
    const compName = name.replace(/^Tns/, "").toLowerCase();
    return {
      name,
      from: path,
      sideEffects: /^Tns/.test(name) ? `${path}/components/${compName}/style/${compName}.css` : false
    }
  }
}