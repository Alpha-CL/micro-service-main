import { qiankunCallback } from '@/qiankun/utils';
import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {
  slogan: 'Hello MicroFrontend from qiankun11-initGlobalState',
  callback: qiankunCallback,
};

/**
 * 初始化 state
 * https://qiankun.umijs.org/zh/api#initglobalstatestate
 */
const actions: MicroAppStateActions = initGlobalState(state);

//  监听数据变化
actions.onGlobalStateChange((state, prev) => {
  console.log('-> onGlobalStateChange', state, prev);
  // 更新数据
  // actions.setGlobalState(state);
});

//  取消监听
// actions.offGlobalStateChange();
