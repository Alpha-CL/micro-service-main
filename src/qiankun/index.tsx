import { addGlobalUncaughtErrorHandler } from 'qiankun';

import QiankunErrorBoundary from '@/qiankun/ErrorBoundary';
import { apps } from '@/qiankun/apps';
import { lifeCycles } from '@/qiankun/lifeCycles';
import { qiankunCallback, qiankunFetch } from '@/qiankun/utils';
import { getMicroAppRouteComponent } from '@@/plugin-qiankun-master/getMicroAppRouteComponent';
import './state';

export function patchClientRoutes({ routes }: any) {
  routes[0].children.forEach((item: any, index: number) => {
    if (item.microApp) {
      console.log('item', item);
      routes[0].children[index].element = getMicroAppRouteComponent({
        appName: item.microApp,
        base: item.microAppProps?.base || '/',
        routePath: item.path,
        masterHistoryType: item.microAppProps?.hisory || 'browser',
        routeProps: {
          errorBoundary: (error: any) => <QiankunErrorBoundary error={error} />,
        },
      })();
    }
  });
}

/**
 * umi下自带的父子通信方式
 */
export function useQiankunStateForSlave() {
  return {
    slogan: 'Hello MicroFrontend from umi-useQiankunStateForSlave',
    callback: qiankunCallback,
  };
}

/**
 * 捕获全局微应用错误
 * https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
 */
addGlobalUncaughtErrorHandler((event) => {
  // 这里会频繁触发, 注意使用
  console.log('-> addGlobalUncaughtErrorHandler', event);
});

export const qiankun = {
  apps,
  lifeCycles,
  fetch: qiankunFetch,
};
