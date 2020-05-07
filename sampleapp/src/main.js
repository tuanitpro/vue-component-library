import Vue from "vue";
import App from "./App.vue";
import store from './store';
import DummyButton from '@tuanitpro/dummylib';
Vue.config.productionTip = false;
Vue.use(DummyButton, { store });
new Vue({
  store,
  DummyButton,
  render: h => h(App)
}).$mount("#app");
