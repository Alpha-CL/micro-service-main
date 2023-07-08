import plugins from '@/wujie/plugin';
import { credentialsFetch } from '@/wujie/utils';

const apps = [
  {
    name: 'micro-sub-app',
    url: '//localhost8801/',
    attrs: {},
    exec: true,
    fetch: credentialsFetch,
    plugins,
    prefix: {},
  },
];

export default apps;
