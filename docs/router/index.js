import Vue from 'vue';
import Router from 'vue-router';
import Home from '../cpmponents/home.vue';
Vue.use(Router);

export default new Router({
    //mode: 'history',
    // history: true,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
