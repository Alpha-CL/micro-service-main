import { EventBus } from 'wujie';

declare global {
  interface appWindow {
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
    __WUJIE: {
      id: string;
    };
  }
}

export { appWindow };
