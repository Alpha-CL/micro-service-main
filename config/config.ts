import { defineConfig } from '@umijs/max';
import routes from './routes';
import proxy from './proxy';
import qiankun from './qiankun';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  npmClient: 'yarn',
  routes,
  proxy,
  qiankun,
});