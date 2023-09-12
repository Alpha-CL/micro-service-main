import MicroServiceAppErrorBoundary from '@/components/MicroServiceApp/ErrorBoundary';
import apps from '@/wujie/apps';
import { useLocation } from '@@/exports';
import qs from 'querystring';
import React, {
  ForwardRefRenderFunction,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { destroyApp, plugin, preOptions } from 'wujie';
import WujieReact from 'wujie-react';

type lifecycle = (appWindow: Window) => any;
type loadErrorHandler = (url: string, e: Error) => any;

export interface MicroServiceAppProps extends preOptions {
  [key: string]: any;

  /** 唯一性用户必须保证 */
  name: string;
  /** 需要渲染的url */
  url: string;
  /** iframe 的宽度 */
  width?: string;
  /** iframe 的高度 */
  height?: string;
  /** 需要渲染的html, 如果用户已有则无需从url请求 */
  html?: string;
  /** 代码替换钩子 */
  replace?: (code: string) => string;
  /** 自定义fetch */
  fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  /** 注入给子应用的属性 */
  props?: { [key: string]: any };
  /** 自定义运行iframe的属性 */
  attrs?: { [key: string]: any };
  /** 自定义降级渲染iframe的属性 */
  degradeAttrs?: { [key: string]: any };
  /** 子应用采用fiber模式执行 */
  fiber?: boolean;
  /** 子应用保活，state不会丢失 */
  alive?: boolean;
  /** 子应用采用降级iframe方案 */
  degrade?: boolean;
  /** 子应用插件 */
  plugins?: Array<plugin>;
  /** 子应用生命周期 */
  /** 加载子应用前调用 */
  beforeLoad?: lifecycle;
  /** 子应用 mount 之前调用 */
  beforeMount?: lifecycle;
  /** 子应用 mount 之后调用 */
  afterMount?: lifecycle;
  /** 子应用 unmount 之前调用 */
  beforeUnmount?: lifecycle;
  /** 子应用 unmount 之后调用 */
  afterUnmount?: lifecycle;
  /** 保活子应用进入时触发 */
  activated?: lifecycle;
  /** 保活子应用离开时触发 */
  deactivated?: lifecycle;
  /** 子应用加载资源失败后触发 */
  loadError?: loadErrorHandler;
}

interface MicroServiceAppRef {
  [key: string]: any;
}

type LifeCycle = (appWindow: Window) => any;

const MicroServiceApp: ForwardRefRenderFunction<
  MicroServiceAppRef,
  MicroServiceAppProps
> = (
  props: MicroServiceAppProps,
  ref: Ref<MicroServiceAppRef | HTMLDivElement>,
) => {
  const location = useLocation();

  const {
    width = '100%',
    height = '100%',
    name,
    url,
    alive = true,
    fetch,
    props: AppProps = {},
    attrs = {},
    replace = (code: string) => {},
    sync = true,
    prefix = {},
    fiber = true,
    degrade = false,
    plugins = [],
  } = props;

  const [loading, setLoading] = useState<any>(false);
  const [app, setApp] = useState<any>({});
  const [appPath, setAppPath] = useState<string>('');

  // Customize instance values exposed to parent components
  useImperativeHandle(ref, () => ({}));

  useEffect(() => {
    if (!!name) {
      setLoading(true);
      initConfig(name);
    }
    return () => {
      destroyApp(name);
    };
  }, []);

  useEffect(() => {
    const queryString = location.search.slice(1);
    const queryParams = qs.parse(queryString);
    if (queryParams[name]) {
      setAppPath(String(queryParams[name]));
    }
  }, [location.search]);

  /**
   * 根据 name 从 apps 中筛选出指定的 app的配置对象
   *
   * @param name {string} app 唯一名称
   */
  const initConfig = (name: string) => {
    try {
      for (let i = 0; i <= apps.length; i++) {
        const app = apps[i];
        if (app.name === name && !!app.url) {
          setApp(app);
          setLoading(false);
          break;
        }
      }
    } catch (err) {
      console.log('-> MicroServiceApp.initConfig', err);
    }
  };

  /**
   * 添加自定义fetch后，子应用的静态资源请求和采用了 fetch 的接口请求全部会走自定义fetch
   * 对于需要携带 cookie 的请求，可以采用自定义 fetch 方式实现
   *
   * @param url {string} 请求地址
   * @param options {object} 请求时候携带参数
   */
  const microServiceAppOnFetch = (url: string, options: any) => {
    return window.fetch(url, { ...options, token: 'include' });
  };

  const beforeLoad: LifeCycle = (appWindow: Window) => {};
  const beforeMount: LifeCycle = (appWindow: Window) => {};
  const afterMount: LifeCycle = (appWindow: Window) => {
    if (!!app.name && !!app.url) setLoading(false);
  };
  const beforeUnmount: LifeCycle = (appWindow: Window) => {};
  const afterUnmount: LifeCycle = (appWindow: Window) => {};
  const activated: LifeCycle = (appWindow: Window) => {};
  const deactivated: LifeCycle = (appWindow: Window) => {};
  const loadError: loadErrorHandler = (url: string, e: Error) => {};

  return (
    <React.Fragment>
      {/*app: {JSON.stringify(app)}*/}
      {/*appPath: {JSON.stringify(appPath)}*/}

      <MicroServiceAppErrorBoundary>
        {!!app.name && !!app.url && (
          <>
            <WujieReact
              name={app.name}
              url={app.url}
              loading={loading}
              width={width}
              height={height}
              alive={alive}
              sync={sync}
              props={{ ...AppProps, test: 'microServiceMain' }}
              attrs={attrs}
              fetch={fetch || microServiceAppOnFetch}
              // replace={replace} // 运行时处理子应用的代码
              prefix={prefix} // 短路径的能力，当子应用开启路由同步模式后，如果子应用链接过长，可以采用短路径替换的方式缩短同步的链接
              fiber={fiber} // js 的执行模式，由于子应用的执行会阻塞主应用的渲染线程，当设置为true时js采取类似react fiber的模式方式间断执行
              degrade={degrade}
              plugins={plugins} // webpack 中间件配置
              beforeLoad={beforeLoad}
              beforeMount={beforeMount}
              afterMount={afterMount}
              beforeUnmount={beforeUnmount}
              afterUnmount={afterUnmount}
              activated={activated}
              deactivated={deactivated}
              loadError={loadError}
            />
          </>
        )}
      </MicroServiceAppErrorBoundary>
    </React.Fragment>
  );
};

export default React.forwardRef(MicroServiceApp);
