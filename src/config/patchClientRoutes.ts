/**
 * 修改被 react-router 渲染前的树状路由表
 * https://umijs.org/docs/api/runtime-config#onroutechange-routes-clientroutes-location-action-basename-isfirst-
 */
export function patchClientRoutes({ routes }) {
  // routes.unshift({
  //   path: '/foo',
  //   element: <Page />,
  // });
}
