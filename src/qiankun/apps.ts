/**
 * 初始化注册子应用集合
 * https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
 */
export const apps = [
  {
    name: 'chat',
    entry: '//localhost:8801',
    // container: '#app-chat',
    // activeRule: '/chat/*',
    // props: {
    //   name: 'chat-gpt',
    // },
  },
];