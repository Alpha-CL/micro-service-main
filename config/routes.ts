export default [
  {
    path: '/',
    redirect: '/test',
  },
  {
    name: 'ChatGPT',
    path: '/chat',
    component: './chat',
  },
  {
    name: 'Test',
    path: '/test/*',
    component: './test',
  },
];
