import Vue from 'vue';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import App from './App.vue';

fontawesome.library.add(solid);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
