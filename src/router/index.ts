import { createRouter, createWebHistory } from 'vue-router'
import nprogress from 'nprogress'
import { pinia, useUserStore } from '@/store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layout/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('../views/index.vue'),
          meta: {
            title: 'lemon 后台 首页'
          }
        }, {
          path: '/write-article',
          component: () => import('../views/write/article.vue'),
          meta: {
            title: 'lemon 后台 编辑文章'
          }
        },
        {
          path: '/write-page',
          component: () => import('../views/write/page.vue'),
          meta: {
            title: 'lemon 后台 编辑页面'
          }
        },
        {
          path: '/manage-users',
          component: () => import('../views/manage/users.vue'),
          meta: {
            title: 'lemon 后台 管理用户'
          }
        },
        {
          path: '/manage-articles',
          component: () => import('../views/manage/articles.vue'),
          meta: {
            title: 'lemon 后台 管理文章'
          }
        },
        {
          path: '/manage-pages',
          component: () => import('../views/manage/pages.vue'),
          meta: {
            title: 'lemon 后台 管理页面'
          }
        },
        {
          path: '/manage-article-sorts',
          component: () => import('../views/manage/article-sorts.vue'),
          meta: {
            title: 'lemon 后台 管理文章分类'
          }
        },
        {
          path: '/manage-tags',
          component: () => import('../views/manage/pages.vue'),
          meta: {
            title: 'lemon 后台 管理标签'
          }
        },
        {
          path: '/manage-links',
          component: () => import('../views/manage/links.vue'),
          meta: {
            title: 'lemon 后台 管理友链'
          }
        },
        {
          path: '/manage-link-sorts',
          component: () => import('../views/manage/link-sorts.vue'),
          meta: {
            title: 'lemon 后台 管理友链分组'
          }
        },
        {
          path: '/manage-comments',
          component: () => import('../views/manage/comments.vue'),
          meta: {
            title: 'lemon 后台 管理评论'
          }
        },
        {
          path: '/profile',
          component: () => import('../views/profile.vue'),
          meta: {
            title: 'lemon 后台 个人信息'
          }
        },
        {
          path: '/settings',
          component: () => import('../views/settings.vue'),
          meta: {
            title: 'lemon 后台 系统配置'
          }
        },
        {
          path: '/file-system',
          component: () => import('../views/file-system.vue'),
          meta: {
            title: 'lemon 后台 文件系统'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/login.vue'),
      meta: {
        title: 'lemon 后台 登录'
      }
    },
    {
      path: '/signup',
      // name: 'signup',
      component: () => import('../views/signup.vue'),
      meta: {
        title: 'lemon 后台 注册'
      }
    },
    // {
    //   path: '/404',
    //   component: () => import('../views/404.vue'),
    //   meta: {
    //     title: '404页面'
    //   }
    // },
    {
      path: '/:pathMatch(.*)',
      // redirect: '/404'
      redirect: to => {
        alert('404 页面未找到，重定向到首页')
        return { name: 'index' }
      }
    }
  ]
})

router.beforeEach((to, from) => {
  nprogress.start()
  const user = useUserStore(pinia)
  console.log(to.path, user._id, user.email);

  if (to.path !== '/login' && to.path !== '/signup' && !user._id) {
    return { path: '/login', params: {} }

  }
})

router.afterEach((to,) => {
  document.title = to.meta.title as string
  nprogress.done()
})
export default router
