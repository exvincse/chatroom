import Vue from 'vue';
import firebase from 'firebase/app';
import cookie from 'js-cookie/src/js.cookie';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

Vue.prototype.$cookie = cookie;

const firebaseConfig = {
  apiKey: 'AIzaSyCkNQgPvrfDWAT25nBlGudbqwSirt6T_bA',
  authDomain: 'test-e30fc.firebaseapp.com',
  databaseURL: 'https://test-e30fc.firebaseio.com',
  projectId: 'test-e30fc',
  storageBucket: 'test-e30fc.appspot.com',
  messagingSenderId: '297559977714',
  appId: '1:297559977714:web:b2443f82b819b8f1',
};
firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;
Vue.prototype.$firebase = firebase;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
