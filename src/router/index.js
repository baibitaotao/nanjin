import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 获取组件的方法
const _import = require('./_import_' + process.env.NODE_ENV)

/* Layout */
import Layout from '@/layout'

export const routerMap = {
  Layout: Layout,
  feiyongbaoxiao: _import('expensePaidDetail/index'),
  waichuchaxun: _import('waichuchaxun/index'),
  qingjiachaxun: _import('qingjiachaxun/index'),
  waichushenqing: _import('applyOut/index'),
  kucunguanli: _import('officeStock/stockController/index'),
  fenleiguanli: _import('officeStock/ItemController/index'),
  lingyongdengji: _import('officeStock/useController/index'),
  qingjiashenqing: _import('applyVacation/index'),
  huiyishenqing: _import('meetingCost/index'),
  huiyijiyao: _import('meetingSummary/index'),
  // 请借款，付款申请
  fukuanshenqing: _import('applyBorrow/index'),
  reportBack: _import('reportBack/index'),

  caigoushenqing: _import('caigoushenqing/index'),
  linyondengji: _import('linyondengji/index'),
  kucunguanliFix: _import('kucunguanliFix/index'),

  zijinjiesuan: _import('xiangmuzijin/index'),
  chuchaishenqing: _import('chuchaishenqign/index'),

  // 办公用品采购
  bangonyonpincaigou: _import('bangonyonpincaigou/index'),

  // 理财产品
  licaigoumai: _import('licaichanpin/index'),
}
/* Router Modules */
import chartsRouter from './modules/charts'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/views/redirect/index')
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // 办公用品流程
  {
    path: '/bangonyonpinlinyonLC',
    component: () => import('@/views/bangonyonpinlinyonLC/index'),
    name: 'bangonyonpinlinyonLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/bangonyonpincaigouLC',
    component: () => import('@/views/bangonyonpincaigouLC/index'),
    name: 'bangonyonpincaigouLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  // 固定资产流程
  {
    path: '/gudinzichanLC/caigou',
    component: () => import('@/views/gudinzichanLC/caigou'),
    name: 'gudinzichanLCcaigou',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/gudinzichanLC/kucun',
    component: () => import('@/views/gudinzichanLC/kucun'),
    name: 'gudinzichanLCkucun',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/gudinzichanLC/linyon',
    component: () => import('@/views/gudinzichanLC/linyon'),
    name: 'gudinzichanLCLinyon',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

  {
    path: '/qinjiashenqingLC',
    component: () => import('@/views/qinjiashenqingLC/index'),
    name: 'qinjiashenqingLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

  {
    path: '/waichushenqingLC',
    component: () => import('@/views/waichushenqingLC/index'),
    name: 'waichushenqingLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/meetingSummaryLC',
    component: () => import('@/views/meetingSummaryLC/index'),
    name: 'meetingSummaryLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

  {
    path: '/huiyiguanliLC',
    component: () => import('@/views/huiyiguanliLC/index'),
    name: 'huiyiguanliLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

  {
    path: '/fukuanshenqingLC',
    component: () => import('@/views/fukuanshenqingLC/index'),
    name: 'fukuanshenqingLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

  {
    path: '/feiyonchenbenLC',
    component: () => import('@/views/feiyonchenbenLC/index'),
    name: 'feiyonchenbenLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/licaigoumaiLC',
    component: () => import('@/views/licaigoumaiLC/index'),
    name: 'licaigoumaiLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/licaishuhuiLC',
    component: () => import('@/views/licaishuhuiLC/index'),
    name: 'licaishuhuiLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

  {
    path: '/xiangmuzijinjiesuanLC',
    component: () => import('@/views/xiangmuzijinjiesuanLC/index'),
    name: 'xiangmuzijinjiesuanLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/kuncunguanliFixLC',
    component: () => import('@/views/kuncunguanliFixLC/index'),
    name: 'kuncunguanliFixLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },
  {
    path: '/meetingCostBaoxiaoLC',
    component: () => import('@/views/meetingCostBaoxiaoLC/index'),
    name: 'meetingCostBaoxiaoLC',
    hidden: true,
    meta: {
      title: '',
      icon: '',
      noCache: false
    }
  },

]

export const asyncRoutes1 = [{
    path: '/expensePaidDetail',
    component: 'Layout',
    redirect: '/expensePaidDetail/index',
    alwaysShow: false, // will always show the root menu
    name: 'expensePaidDetail',
    meta: {
      title: '费用报销',
      icon: 'lock'
    },
    children: [{
      path: 'index',
      component: 'expensePaidDetail',
      name: 'expensePaidDetail',
      meta: {
        title: '费用报销',
        icon: 'lock'
      }
    }]
  },
  {
    path: '/applyVacation',
    component: 'Layout',
    redirect: '/applyVacation/index',
    alwaysShow: false, // will always show the root menu
    name: 'applyVacation',
    meta: {
      title: '请假申请',
      icon: 'qu-appleinc'
    },
    children: [{
      path: 'index',
      component: 'applyVacation',
      name: 'applyVacation',
      meta: {
        title: '请假申请',
        icon: '合同查询'
      }
    }]
  },
  {
    path: '/applyOut',
    component: 'Layout',
    redirect: '/applyOut/index',
    alwaysShow: false, // will always show the root menu
    name: 'applyOut',
    meta: {
      title: '外出申请',
      icon: 'qu-appleinc'
    },
    children: [{
      path: 'index',
      component: 'applyOut',
      name: 'applyOut',
      meta: {
        title: '外出申请',
        icon: 'bank'
      }
    }]
  },
  {
    path: '/officeStock',
    component: 'Layout',
    alwaysShow: false, // will always show the root menu
    name: 'officeStock',
    meta: {
      title: '办公用品',
      icon: 'lock'
    },
    children: [{
      path: 'stockController',
      component: 'stockController',
      name: 'stockController',
      meta: {
        title: '库存管理',
        icon: 'lock'
      }
    }, {
      path: 'ItemController',
      component: 'ItemController',
      name: 'ItemController',
      meta: {
        title: '分类管理',
        icon: 'lock'
      }
    }, {
      path: 'useController',
      component: 'useController',
      name: 'useController',
      meta: {
        title: '领用登记',
        icon: 'lock'
      }
    }]
  },
  {
    path: '/meetingCost',
    component: 'Layout',
    redirect: '/meetingCost/index',
    alwaysShow: false, // will always show the root menu
    name: 'meetingCost',
    meta: {
      title: '会议管理',
      icon: 'lock'
    },
    children: [{
      path: 'index',
      component: 'meetingCost',
      name: 'meetingCost',
      meta: {
        title: '会议管理',
        icon: 'lock'
      }
    }]
  },
  {
    path: '/meetingSummary',
    component: 'Layout',
    redirect: '/meetingSummary/index',
    alwaysShow: false, // will always show the root menu
    name: 'meetingSummary',
    meta: {
      title: '会议纪要',
      icon: 'lock'
    },
    children: [{
      path: 'index',
      component: 'meetingSummary',
      name: 'meetingSummary',
      meta: {
        title: '会议纪要',
        icon: 'lock'
      }
    }]
  },
  {
    path: '/applyBorrow',
    component: 'Layout',
    redirect: '/applyBorrow/index',
    alwaysShow: false, // will always show the root menu
    name: 'applyBorrow',
    meta: {
      title: '请借款',
      icon: 'lock'
    },
    children: [{
      path: 'index',
      component: 'applyBorrow',
      name: 'applyBorrow',
      meta: {
        title: '请借款',
        icon: 'lock'
      }
    }]
  },
  {
    path: '/reportBack',
    component: 'Layout',
    redirect: '/reportBack/index',
    alwaysShow: false, // will always show the root menu
    name: 'reportBack',
    meta: {
      title: '综合查询',
      icon: 'lock'
    },
    children: [{
      path: 'index',
      component: 'reportBack',
      name: 'reportBack',
      meta: {
        title: '综合查询',
        icon: 'lock'
      }
    }]
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [{
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/icons/index'),
      name: 'Icons',
      meta: {
        title: 'Icons',
        icon: 'icon',
        noCache: true
      }
    }]
  },

  /** when your routing map is too long, you can split it into small modules **/

  chartsRouter,
  nestedRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [{
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: {
          title: 'Create Article',
          icon: 'edit'
        }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: {
          title: 'Edit Article',
          noCache: true,
          activeMenu: '/example/list'
        },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: {
          title: 'Article List',
          icon: 'list'
        }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'Tab',
      meta: {
        title: 'Tab',
        icon: 'tab'
      }
    }]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [{
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: {
          title: '401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: {
          title: '404',
          noCache: true
        }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [{
      path: 'log',
      component: () => import('@/views/error-log/index'),
      name: 'ErrorLog',
      meta: {
        title: 'Error Log',
        icon: 'bug'
      }
    }]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/clipboard/index'),
      name: 'ClipboardDemo',
      meta: {
        title: 'Clipboard',
        icon: 'clipboard'
      }
    }]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [{
      path: 'https://github.com/PanJiaChen/vue-element-admin',
      meta: {
        title: 'External Link',
        icon: 'link'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  // base: '/',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
