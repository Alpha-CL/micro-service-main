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
    component: './demo',
  },
  // {
  //   path: "/*",
  //   component: "./404",
  // },
];

export default routes;
