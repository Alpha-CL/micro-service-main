/**
 * https://umijs.org/docs/guides/routes
 */
const routes = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    name: 'Demo',
    path: '/demo',
    component: './demo',
    menu: {},
  },
  {
    name: 'ChatGPT',
    path: '/chatgpt',
    component: './chatgpt',
  },
  // {
  //   path: "/*",
  //   component: "./404",
  // },
];

export default routes;
