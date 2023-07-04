interface Register {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props: object
}

export default {
  app: [
    {
      name: 'chat',
      entry: '//localhost:8001',
      container: '#app-chat',
      activeRule: '/chat',
      props: {
        name: 'chat-gpt',
      },
    }
  ]
};