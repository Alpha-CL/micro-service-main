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

apps.forEach((app) => {
  setupApp({
    ...app,
    degrade,
    ...lifecycles,
  });
  preloadApp({
    name: app.name,
    url: app.url,
  });
});
