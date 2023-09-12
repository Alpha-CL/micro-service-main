import { EventBus } from 'wujie';

declare global {
  interface Window {
    $wujie: {
      bus: EventBus;
      shadowRoot?: ShadowRoot;
      props?: {
        [key: string]: any;
      };
      location?: {
        [key: string]: any;
        host: string;
      };
    };
    __POWERED_BY_WUJIE__: boolean;
    __WUJIE_MOUNT: any;
    __WUJIE_UNMOUNT: any;
  }
}

export {};
