import Vue from 'vue';
import App from './app.vue';
import router from './router';
import {Selectbox} from 'Src/index';
Vue.use(Selectbox);
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});
