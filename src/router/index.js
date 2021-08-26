import {createRouter,createWebHistory} from "vue-router";
import home from "../views/home";
import lyb from "../views/lyb";
import news from "../views/news";
import Login from "../views/Login"
import register from "../views/register";
import carts from "../views/carts";
import gooddetails from "../views/gooddetails";
import address from "../views/address";
import makeSureOrder from "../views/makeSureOrder";
import submitOrder from "../views/submitOrder";

const routes = [
    {
        path: '/',
        redirect: '/helloHome'
    },
    {
        path : '/',
        name : 'home',
        component : home,
        children: [
            {
                path: 'helloHome',
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/index'),
                meta: { title: '首页' }
            }
            ]
    },
    {
        path:'/lyb',
        name:'lYB',
        component: lyb
    },
    {
        path:'/news',
        name:'news',
        component: news
    },
    {
        path:'/Login',
        name:'Login',
        component:Login
    },
    {
        path:'/register',
        name:register,
        component: register
    },
    {
        path:'/carts',
        name:carts,
        component: carts
    },
    {
        path:'/gooddetails',
        name:gooddetails,
        component: gooddetails
    },
    {
        path:'/address',
        name:address,
        component: address
    },
    {
        path:'/makeSureOrder',
        name:makeSureOrder,
        component: makeSureOrder
    },
    {
        path:'/submitOrder',
        name:submitOrder,
        component: submitOrder
    }


]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

//导航守卫
router.beforeEach((to,from,next)=>{
   if(to.path=='/Login') return next();
   if(to.path=='/register') return next();
   const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/Login')
    next()
})
export default router