/**
 * 主应用生命周期
 * https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
 */
export const lifeCycles = {
  beforeLoad: (props: any) => {
    // 1.仅第一次载入时触发
    console.log('-> main beforeLoad');
  },
  beforeMount: (props: any) => {
    // 2.每次挂载都触发
    console.log('-> main beforeMount');
  },
  afterMount: (props: any) => {
    // 3.每次挂载都触发
    console.log('-> main afterMount');
    // 这里需要做一次set才能保证微应用能触发到change, 以便能拿到state
    // actions.setGlobalState(state);
  },
  beforeUnmount: (props: any) => {
    // 4.每次卸载都触发
    console.log('-> main beforeUnmount');
  },
  afterUnmount: (props: any) => {
    // 5.每次卸载都触发
    console.log('-> main afterUnmount');
  },
};
