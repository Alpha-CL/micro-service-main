import LayoutErrorBoundary from '@/layouts/errorBoundart';
import { App, ConfigProvider } from 'antd';
import React from 'react';
import { Outlet } from 'umi';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface LayoutProps {
  [key: string]: any;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { message, modal, notification } = App.useApp();

  return (
    <React.Fragment>
      <LayoutErrorBoundary>
        <ConfigProvider direction="rtl">
          <App
            className="app"
            message={{ maxCount: 1 }}
            notification={{ placement: 'bottomLeft' }}
          >
            <Outlet />
          </App>
        </ConfigProvider>
      </LayoutErrorBoundary>
    </React.Fragment>
  );
};

Layout.defaultProps = {};
Layout.propTypes = {};

export default React.memo(Layout);
