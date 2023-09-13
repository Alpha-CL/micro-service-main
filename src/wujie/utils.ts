import { destroyApp } from 'wujie';

export function credentialsFetch(url: string, options: any) {
  return window.fetch(url, { ...options, credentials: 'include' });
}

export function destroyWuJieApp(name: string) {
  destroyApp(name);
}
