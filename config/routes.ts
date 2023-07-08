/**
 * https://umijs.org/docs/guides/routes
 */
const routes = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    name: 'demo',
    path: '/demo',
    component: './Demo',
  },
  {
    name: 'wujie',
    path: '/wujie',
    component: './WuJie',
  },
  // {
  //   path: "/*",
  //   component: "./404",
  // },
];

export default routes;
