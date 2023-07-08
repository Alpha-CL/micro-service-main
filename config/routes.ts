/**
 * https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    name: 'demo',
    path: '/demo',
    component: './Demo',
  },
  // {
  //   path: "/*",
  //   component: "./404",
  // },
];
