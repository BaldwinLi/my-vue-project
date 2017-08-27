// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $Vue from 'vue';
window['Vue'] = $Vue;
import 'vue-resource';

import * as JQuery from 'jquery';
window['$'] = window['jQuery'] = JQuery;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import * as App from './App';
import router from './router';

window['Vue'].config.productionTip = false;
var vue = new window['Vue']({
  el: '#app',
  router,
  template: '<App/>',
  components: { App: App }
});


