import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import qiankun from './qiankun';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  outputPath: 'dist',
  locale: {
    /**
     * https://umijs.org/docs/max/i18n
     * 默认使用 src/locales/zh-CN.ts 作为多语言文件
     */
    default: 'zh-CN',
    baseSeparator: '-',
  },
  styledComponents: {
    babelPlugin: {},
  },
  npmClient: 'yarn',
  routes,
  proxy,
  qiankun,
});
