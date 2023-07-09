import { destroyApp } from 'wujie';

export function credentialsFetch(url, options) {
  return window.fetch(url, { ...options, credentials: 'include' });
}

export function destroyWuJieApp(name) {
  destroyApp(name);
}
