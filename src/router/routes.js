import Home from '../views/home/home'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/home/section'
      },
      {
        path: '/home/section',
        component: () => import('../views/home/component/section')
      },
      {
        path: '/home/project',
        component: () => import('../views/project/project')
      }
    ]
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
