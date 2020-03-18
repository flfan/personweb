import Home from '../views/home/home'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
