import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';
import chainWebpack from './webpack';

/**
 * https://umijs.org/docs/api/config
 *
 * @chainWebpack: 修改 webpack 配置
 * @base: 用于设置约定的路由的基础路径，默认从 src/pages
 * @routes: 路由配置
 * @proxy: 代理配置
 */
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
  },
  outputPath: 'dist',
  base: '/',
  alias: {},
  chainWebpack,
  routes,
  proxy,
  npmClient: 'yarn',
});
