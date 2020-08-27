import VueRouter from 'vue-router'

import nav from '../../components/nav.vue'

import store from '../../components/store.vue'
import details from '../../components/details.vue'
import headlines from '../../components/headlines.vue'
import community from '../../components/community.vue'
import Cart from '../../components/Cart.vue'
import mine from '../../components/mine.vue'
import search from '../../components/search.vue'
import login from '../../components/login.vue'
import register from '../../components/register.vue'
import message from '../../components/message.vue'
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:nav,
            children:[
                {
                    path:'/store',
                    component:store,
                },
                {
                    path:'/headlines',
                    component:headlines,
                },
                {
                    path:'/community',
                    component:community,
                },
                {
                    path:'/Cart',
                    component:Cart,
                },
                {

                    path:'/mine',
                    component:mine,
                },

            ],
            redirect:'/store',
        },
        {
            path:'/details/:name',
            name:'details',
            component:details,
        },
        {
            path:'/search',
            component:search,
        },
        {
            path:'/login',
            component:login,
        },
        {
            path:'/register',
            component:register,
        },
        {
            path:'/message',
            component:message,
        },
        {
            path:'/*',
            redirect:'/',
        }
    ]
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}