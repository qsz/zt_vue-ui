import Vue from 'vue';
import App from './app.vue';
import router from './router';
import {Selectbox,Ninebox,Search} from 'Src/index';
Vue.use(Selectbox);
Vue.use(Ninebox);
Vue.use(Search);
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});
