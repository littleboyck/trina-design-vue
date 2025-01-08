import { createApp } from 'vue'
import App from './App.vue'
import TnDesV from '@cztrina/components'
import '@cztrina/components/base/style/css'

const app = createApp(App)
app.use(TnDesV)
app.mount('#app')
