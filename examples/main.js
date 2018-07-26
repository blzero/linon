import Vue from 'vue'
import router from './router'
import App  from './App.vue'
import NWDComponent from '../src/index.js'

import '../src/theme-default/index.styl'

Vue.use(NWDComponent);
new Vue({
    router,
    render:h=>h(App),
}).$mount('#app');