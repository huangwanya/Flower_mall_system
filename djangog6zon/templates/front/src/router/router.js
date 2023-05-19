import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import kehuList from '../pages/kehu/list'
import kehuDetail from '../pages/kehu/detail'
import kehuAdd from '../pages/kehu/add'
import xianhualeixingList from '../pages/xianhualeixing/list'
import xianhualeixingDetail from '../pages/xianhualeixing/detail'
import xianhualeixingAdd from '../pages/xianhualeixing/add'
import xianhuaxinxiList from '../pages/xianhuaxinxi/list'
import xianhuaxinxiDetail from '../pages/xianhuaxinxi/detail'
import xianhuaxinxiAdd from '../pages/xianhuaxinxi/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'kehu',
					component: kehuList
				},
				{
					path: 'kehuDetail',
					component: kehuDetail
				},
				{
					path: 'kehuAdd',
					component: kehuAdd
				},
				{
					path: 'xianhualeixing',
					component: xianhualeixingList
				},
				{
					path: 'xianhualeixingDetail',
					component: xianhualeixingDetail
				},
				{
					path: 'xianhualeixingAdd',
					component: xianhualeixingAdd
				},
				{
					path: 'xianhuaxinxi',
					component: xianhuaxinxiList
				},
				{
					path: 'xianhuaxinxiDetail',
					component: xianhuaxinxiDetail
				},
				{
					path: 'xianhuaxinxiAdd',
					component: xianhuaxinxiAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
