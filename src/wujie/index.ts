import WujieReact from 'wujie-react';
import apps from './apps';
import lifecycles from './lifeCycle';

const { setupApp, preloadApp, bus } = WujieReact;
const isProduction = process.env.NODE_ENV === 'production';
bus.$on('click', (msg) => window.alert(msg));

const degrade =
  window.localStorage.getItem('degrade') === 'true' ||
  !window.Proxy ||
  !window.CustomElementRegistry;

/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
const attrs = isProduction ? { src: hostMap('//localhost:7700/') } : {};

apps.forEach((app) => {
  setupApp({
    ...app,
    degrade,
    attrs,
    ...lifecycles,
  });
  preloadApp({
    name: app.name,
    url: app.url,
  });
});
