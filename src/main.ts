import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from './router/index.js'
import { Quasar, Dialog } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
  
// App.use(Quasar, {
//     plugins: {
//     Dialog
//     }
// })


const quasarConfig = {
    plugins: {
        Dialog
    }
}

const app = createApp(App);

app
    // .use(router)
    .use(Quasar,quasarConfig)


app.mount('#app')
