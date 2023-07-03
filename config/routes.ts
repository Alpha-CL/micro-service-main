export default [
  {
    path: "/",
    redirect: "/chat",
  },
  {
    name: "ChatGPT",
    path: "/chat/*",
    component: "./chat"
  },
  {
    name: "Test",
    path: "/test",
    component: "./test"
  }
];