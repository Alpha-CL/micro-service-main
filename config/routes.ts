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
  // {
  //   path: "/*",
  //   component: "./404",
  // },
];

export default routes;
