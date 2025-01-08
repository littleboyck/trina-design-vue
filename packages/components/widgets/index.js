const widgets = import.meta.glob('./*.vue', { eager: true });

export default {
  install(app) {
    for (const path in widgets) {
      const component = widgets[path].default;
      app.component(component.name, component);
    }
  }
}