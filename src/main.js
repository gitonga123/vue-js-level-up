import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from "./routes";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

export const bus = new Vue();
const router = new VueRouter({
  routes: Routes
});



// Custom directives
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1500px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '750px';
    }
    if (binding.arg == 'column') {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
    vnode;
  }
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
