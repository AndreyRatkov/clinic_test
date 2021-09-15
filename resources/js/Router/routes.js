const routes = [
    {
        path: '/login',
        component: () => import('../Pages/Login'),
        name: 'login',
        requiresAuth: false,
    },
    {
        path: '/users-list/:template',
        component: () => import('../Pages/UsersList'),
        name: 'users-list',
        requiresAuth: true,
    },
    {
        path: '/doctors-list/:template',
        component: () => import('../Pages/UsersList'),
        name: 'doctors-list',
        requiresAuth: true,
    },
    {
        path: '/create-user/:flag/:role',
        component: () => import('../Pages/createUser'),
        name: 'create-user',
        requiresAuth: true,
    },
    {
        path: '/edit-user/:flag/:user_id',
        component: () => import('../Pages/createUser'),
        name: 'edit-user',
        requiresAuth: true,
    },//--
    {
        path: '/detail-user/:user_id',
        component: () => import('../Pages/detailUser'),
        name: 'detail-user',
        requiresAuth: true,
    },
    {
        path: '/about-i/:flag/:role',
        component: () => import('../Pages/createUser'),
        name: 'about-i',
        requiresAuth: true,
    }

]



export default routes;