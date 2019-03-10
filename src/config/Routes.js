import Vue from 'vue'
import Home from '../views/Home'
import About from '../views/About'
import Join from '../views/Join'
import SignIn from '../views/SignIn'
import Dash from '../views/Dash'
import Router from 'vue-router'
import AuthStore from '../stores/AuthStore'

Vue.use(Router);
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/join', component: Join},
    {path: '/sign-in', component: SignIn},
    {
        path: '/dash',
        component: Dash,
        meta: {
            requiresAuth: true
        }

    }
];

let router = new Router({routes});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!AuthStore.state.user) {
            next('/sign-in');
        } else {
            next();
        }
    } else {
        next();
    }
})


export default router;
