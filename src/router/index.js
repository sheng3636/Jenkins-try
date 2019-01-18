import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Login from '@/views/Login'
import ErrorPage from '../views/Error.vue'

import Nav2 from '@/components/demo00/nav2.vue'
import Nav3 from '@/components/demo00/nav3.vue'
import Scrool from '@/components/demo00/button'

// // imp 平台菜单
import ImpIndex from '@/components/imp/index/impIndex'
import EquipMonitoring from '@/components/imp/communityMonitoring/equipMonitoring'
import EventMonitoring from '@/components/imp/communityMonitoring/eventMonitoring'

import EventInfo from '@/components/imp/communityMonitoring/eventInfo'

// omp
import RoleManage from '@/components/omp/roleManage'
import FunctionalOpening from '@/components/omp/functionalOpening'

// 按钮

import MoBan from '@/components/demo00/moban'
import AllExperience from '@/components/demo00/allExperience'

Vue.use(Router)
// mode: 'history',

const VueRouter = new Router({

  routes: [{
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      name: 'home',
      iconCls: 'iconfont icon-erji-zuzhijigou',
      component: Home,
      children: [
        {
          path: '/',
          name: '导航二',
          component: Nav2
        },
        {
          path: '/nav3',
          name: '导航三',
          component: Nav3
        },
        {
          path: '/scrool',
          name: '按钮风格',
          component: Scrool
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '首页',
      iconCls: 'iconfont icon-index',
      sigleMenu: true, //只有一个节点
      children: [{
        path: '/imp/index',
        component: ImpIndex,
        name: '首页',
        meta: {
          title: '首页'
        }
      }]
    },
    {
      path: '/',
      component: Home,
      name: '模板',
      iconCls: 'iconfont icon-erji-zuzhijigou', //图标样式class
      children: [{
          path: '/imp/experience1',
          component: MoBan,
          name: '统一样式',
          meta: {
            title: '统一样式'
          }
        },
        {
          path: '/imp/experience2',
          component: AllExperience,
          name: '一二三四',
          meta: {
            title: '居委管理'
          }
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '社区监控',
      iconCls: 'iconfont icon-jiankong',
      children: [{
          path: '/imp/eventMonitoring',
          component: EventMonitoring,
          name: '社区事件监控',
          meta: {
            title: '社区事件监控'
          }
        },
        {
          path: '/imp/eventMonitoring/eventInfo',
          component: EventInfo,
          name: '社区事件详情',
          meta: {
            title: '社区事件详情'
          },
          hidden: true
        },
        {
          path: '/imp/equipMonitoring',
          component: EquipMonitoring,
          name: '社区设备监控',
          meta: {
            title: '社区设备监控'
          }
        }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '平台角色管理',
      sigleMenu: true,
      iconCls: 'iconfont icon-jiaoseguanli', //图标样式class
      children: [{
        path: '/imp/role/list',
        component: RoleManage,
        name: '平台角色管理',
        meta: {
          title: '平台角色管理'
        }
      }]
    },
    {
      path: '/',
      component: Home,
      name: '运营管理',
      iconCls: 'iconfont icon-yunyingguanli', //图标样式class
      children: [
        {
          path: '/omp/functionOpen',
          component: FunctionalOpening,
          name: '功能开通',
          meta: {
            title: '功能开通'
          }
        },
      ]
    },
    {
      path: '/error',
      name: '404',
      component: ErrorPage,
      hidden: true
    },
    {
      path: '*',
      redirect: {
        path: '/error'
      },
      hidden: true
    },
  ]
});


// // 全局路由守卫
VueRouter.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  //   let isLogin123 = store.state.logined;  // 是否登录
  let isLogin = sessionStorage.getItem('user')

  if (to.name === 'login') { // 登录页时，清除登录状态
    sessionStorage.removeItem('user')
  }

  if (!isLogin && to.path != '/login') { //未登录状态
    next({
      path: '/login'
    })
  } else {
    next();
  }
});

export default VueRouter;
