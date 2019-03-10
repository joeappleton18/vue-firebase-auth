import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './config/Routes'
import {fb}  from './config/FireBase'

Vue.config.productionTip = true
Vue.prototype.firebase = fb;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
