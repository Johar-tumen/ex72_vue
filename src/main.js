import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "./middleware/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import "./filters/date.filter";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);

var firebaseConfig = {
  apiKey: "AIzaSyBrY0MqF6yFJPXbhWlsPLeIvuDql-mvGeA",
  authDomain: "ex72-vue.firebaseapp.com",
  projectId: "ex72-vue",
  storageBucket: "ex72-vue.appspot.com",
  messagingSenderId: "2162806481",
  appId: "1:2162806481:web:71d258512ff894bfd27ff0",
  measurementId: "G-YH4NG2EGEC"
};

firebase.initializeApp({
  apiKey: "AIzaSyBrY0MqF6yFJPXbhWlsPLeIvuDql-mvGeA",
  authDomain: "ex72-vue.firebaseapp.com",
  projectId: "ex72-vue",
  storageBucket: "ex72-vue.appspot.com",
  messagingSenderId: "2162806481",
  appId: "1:2162806481:web:71d258512ff894bfd27ff0",
  measurementId: "G-YH4NG2EGEC"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
