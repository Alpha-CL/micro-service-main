export function credentialsFetch(url, options) {
  return window.fetch(url, { ...options, credentials: 'omit' });
}
