import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { qiankunCallback } from '@/qiankun/utils';

const state = {
  slogan: 'Hello MicroFrontend from qiankun11-initGlobalState',
  qiankunCallback,
};

/**
 * 初始化 state
 * https://qiankun.umijs.org/zh/api#initglobalstatestate
 */
const actions: MicroAppStateActions = initGlobalState(state);

//  监听数据变化
actions.onGlobalStateChange((state, prev) => {
  // update
  // actions.setGlobalState(state);
});

//  取消监听
// actions.offGlobalStateChange();
