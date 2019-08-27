import Vue from 'vue';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/firestore';
// import 'firebase/functions';
// import 'firebase/messaging';
import 'firebase/storage';


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
