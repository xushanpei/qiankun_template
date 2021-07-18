/*
 * @Author: your name
 * @Date: 2020-08-18 11:46:44
 * @LastEditTime: 2021-07-14 14:42:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /report-release-front/config/routes.config.ts
 */
/**
   umi routes: https://umijs.org/zh/guide/router.html
 */
export default [
  {
    path: '/login',
    title: '登录',
    component: '@/pages/login/login',
  },
  {
    path: '/',
    component: '@/pages/index',
    routes: [
      {
        extract: true,
        path: '/',
        redirect: '/main/first',
      },
      {
        path: '/main/first',
        component: '@/pages/main',
        title: '主应用1',
      },
      {
        path: '/main/second',
        component: '@/pages/testPage',
        title: '主应用2',
      }
    ],
  },
];
