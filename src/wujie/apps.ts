import plugins from '@/wujie/plugin';
import { credentialsFetch } from '@/wujie/utils';

const apps = [
  {
    name: 'react16',
    url: '//localhost8801/',
    attrs: {},
    exec: true,
    fetch: credentialsFetch,
    plugins,
    prefix: {
      'prefix-dialog': '/dialog',
      'prefix-location': '/location',
    },
  },
];

export default apps;
