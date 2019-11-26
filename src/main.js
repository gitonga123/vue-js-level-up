import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

export const bus = new Vue();

// Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
    binding;
    vnode;
  }
});

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
}).$mount('#app')
