import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
        path: '/',
        redirect: '/dashboard'
    }, {
        path: '/dashboard',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
        meta: { title: '自述文件' },
        children: [{
                path: 'dashboard',
                component: () =>
                    import ( /* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                meta: { title: '我的桌面' }
            },
            {
                path: 'icon',
                component: () =>
                    import ( /* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                meta: { title: '招聘和配置' },
                children: [{
                    path: '/dashboard/icon/ce1',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/we/ce1.vue'),
                }, {
                    path: '/dashboard/icon/ce2',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/we/ce2.vue'),
                }, {
                    path: '/dashboard/icon/ce3',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/we/ce3.vue'),
                }, {
                    path: '/dashboard/icon/ce4',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/we/ce4.vue'),
                }, , {
                    path: '/dashboard/icon/ce5',
                    component: () =>
                        import ( /* webpackChunkName: "icon" */ '../components/page/we/ce5.vue'),
                }, {
                    path: '/',
                    redirect: '/dashboard/icon/ce1'
                }]

            },
            {
                path: 'table',
                component: () =>
                    import ( /* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                meta: { title: '我的人事' }
            },
            {
                path: 'tabs',
                component: () =>
                    import ( /* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                meta: { title: '员工管理' }
            },
            {
                // vue-schart组件
                path: 'charts',
                component: () =>
                    import ( /* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                meta: { title: '考勤管理' },
                children: [{
                        path: '/dashboard/BaseCharts/qh1',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we2/qh1.vue'),
                    },
                    {
                        path: '/dashboard/BaseCharts/qh2',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we2/qh2.vue'),
                    }, {
                        path: '/dashboard/BaseCharts/qh3',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we2/qh3.vue'),
                    }, {
                        path: '/dashboard/BaseCharts/qh4',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we2/qh4.vue'),
                    }, {
                        path: '/dashboard/BaseCharts/qh5',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we2/qh5.vue'),
                    }, {
                        path: '/dashboard/BaseCharts/qh6',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we2/qh6.vue'),
                    }, {
                        path: '/',
                        redirect: '/dashboard/basecharts/qh1'
                    }
                ]
            },
            {
                // 国际化组件
                path: 'i18n',
                component: () =>
                    import ( /* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                meta: { title: '福利与关怀' },
                children: [{
                        path: '/dashboard/l18n/xz1',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we3/xz1.vue'),
                    },
                    {
                        path: '/dashboard/l18n/xz2',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we3/xz2.vue'),
                    }, {
                        path: '/dashboard/l18n/xz3',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we3/xz3.vue'),
                    }, {
                        path: '/dashboard/l18n/xz4',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we3/xz4.vue'),
                    },
                    {
                        path: '/',
                        redirect: '/dashboard/l18n/xz1'
                    }
                ]
            },
            {
                // 权限页面
                path: 'permission',
                component: () =>
                    import ( /* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                meta: { title: '权限测试', permission: true }
            },
            {
                path: '404',
                component: () =>
                    import ( /* webpackChunkName: "404" */ '../components/page/404.vue'),
                meta: { title: '404' }
            },
            {
                path: '403',
                component: () =>
                    import ( /* webpackChunkName: "403" */ '../components/page/403.vue'),
                meta: { title: '403' }
            },
            {
                path: 'donate',
                component: () =>
                    import ( /* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                meta: { title: '绩效管理' },
                children: [{
                        path: '/dashboard/donate/xzz1',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we4/xzz1.vue'),
                    },
                    {
                        path: '/dashboard/donate/xzz2',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we4/xzz2.vue'),
                    }, {
                        path: '/dashboard/donate/xzz3',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we4/xzz3.vue'),
                    }, {
                        path: '/dashboard/donate/xzz4',
                        component: () =>
                            import ( /* webpackChunkName: "icon" */ '../components/page/we4/xzz4.vue'),
                    }, {
                        path: '/',
                        redirect: '/dashboard/donate/xzz1'
                    }
                ]
            },
            {
                path: '/',
                redirect: '/dashboard/dashboard'
            }
        ]
    },
    {
        path: '/Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
        meta: { title: '登录' }
    }
];
const router = new Router({
    routes
})

// router.beforeEach((to, from, next) => {
//     let a = localStorage.getItem('ms_username');
//     if (a) {
//         next();
//     } else {
//         if (to.path === "Login") {
//             next();
//         } else {
//             next('/Login')
//         }
//     }
// });
export default router;