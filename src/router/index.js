import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Table from '@/views/Table'
import Form from '@/views/Form'
import List from '@/views/List'
import Page4 from '@/views/Page4'
import Page5 from '@/views/Page5'
import Page6 from '@/views/Page6'
import Echarts from '@/views/Echarts'
import Login from '@/views/Login'

Vue.use(Router)

let router =  new Router({
  routes: [
  	{
  		path:'/login',
  		name:'login',
  		component:Login
  	},
    {
      path: '/',
      name: '导航一',
      component: Home,
      icon:'el-icon-location',
      children:[
      	{
      		path: 'table',
		      name: 'Table',
		      component: Table,
      	},
      	{
      		path: 'form',
		      name: 'Form',
		      component: Form,
      	},
      	{
      		path: 'list',
		      name: 'List',
		      component: List,
      	}
      ]
    },
    {
      path: '/',
      name: '导航二',
      component: Home,
      icon:'el-icon-menu',
      children:[
      	{
      		path: 'page4',
		      name: '页面四',
		      component: Page4,
      	},
      	{
      		path: 'page5',
		      name: '页面五',
		      component: Page5,
      	}
      ]
    },
    {
      path: '/',
      name: '',
      component: Home,
      icon:'el-icon-document',
      oneLeaf:true,
      children:[
      	{
      		path: 'page6',
		      name: '导航三',
		      component: Page6,
      	}
      ]
    },
    {
      path: '/',
      name: '导航四',
      component: Home,
      icon:'el-icon-setting',
      children:[
      	{
      		path: 'echarts',
		      name: 'Echarts',
		      component: Echarts,
      	}
      ]
    }
  ]
})

export default router