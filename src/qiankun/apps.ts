import { qiankunCallback } from '@/qiankun/utils';

interface QiankunApp {
  /** 微应用的名称 */
  name: string;
  /** 微应用的入口 */
  entry: string;
  /** 微应用的容器节点的选择器或者 Element 实例 */
  container: string;
  /** 微应用的激活规则 */
  activeRule: string;
  /** 传递给子应用的数据 */
  props?: object;
  /** 隔离模式配置对象 */
  sandbox?: {
    /**
     * 表示开启严格的样式隔离模式。
     * 这种模式下 qiankun 会为每个微应用的容器包裹上一个 shadow dom 节点，
     * 从而确保微应用的样式不会对全局造成影响
     */
    strictStyleIsolation?: boolean;
    /**
     * qiankun 会改写子应用所添加的样式为所有样式规则增加一个特殊的选择器规则来限定其影响范围，
     * 因此改写后的代码会表达类似为如下结构
     */
    experimentalStyleIsolation?: boolean;
  };
}

/**
 * 初始化注册子应用集合
 * https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
 */
export const apps: Array<QiankunApp> = [
  {
    name: 'chat',
    entry: '//localhost:8801',
    activeRule: '/chat/*',
    container: '#app-chat',
    props: {
      name: 'chat-gpt',
      base: '/chat',
      defaultProps: {
        slogan: 'Hello MicroFrontend from qiankun-apps-props',
        callback: qiankunCallback,
      },
    },
    sandbox: {
      experimentalStyleIsolation: true,
    },
  },
];
