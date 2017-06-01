import Vue from 'vue';
import App from './app.vue';
import router from './router';
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});
