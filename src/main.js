import Vue from 'vue';
// import Vuex from 'vuex';
import 'es6-promise/auto';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false;
// Vue.use(Vuex);
new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
