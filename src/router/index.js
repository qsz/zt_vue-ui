import Vue from 'vue';
import Router from 'vue-router';
import selectbox from '../../packages/selectbox/src/selectbox.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'selectbox',
            component: selectbox
        }
    ]
})