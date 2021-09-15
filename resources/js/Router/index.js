import VueRouter from 'vue-router';
import routes from './routes';
//import store from '../Store/index'

const router = new VueRouter({
    mode: 'history',
    routes,
})

function loggedIn() {
    return localStorage.getItem('token')
}


router.beforeEach((to, from, next) => {
    //console.log("echo1:" + to.name)
    //console.log("auth:" + to.requiresAuth)
    //console.log("role:"+store.state.role)

    //if (to.name !== 'Login' && !isAuthenticated)
    //if (to.name !== 'login' && (!loggedIn() || !store.state.role)) {
    if (to.name !== 'login' && !loggedIn()) {
        //next({ name: 'login' })
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }
    next()
    
})

/*
    if(to.matched.some(record => record.meta.requiresAuth)) {
        console.log("echo2")
        if(!loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    }
*/


export default router;
