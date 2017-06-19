import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import UserInfo from '../test_components/userInfo.vue';
Vue.use(Router);

export default new Router({
    //mode: 'history',
    // history: true,
    routes: [
        {
            path: '/userinfo',
            name: 'UserInfo',
            component: UserInfo
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '*',
                    name: 'Home',
                    component: Home
                },

            ]
        }
    ]
})
