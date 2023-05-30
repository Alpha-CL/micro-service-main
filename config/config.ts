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
  npmClient: 'yarn',
  routes,
  proxy,
  qiankun,
});
