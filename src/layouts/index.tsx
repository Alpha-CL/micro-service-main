import LayoutErrorBoundary from '@/layouts/errorBoundart';
import React from 'react';
import { Outlet } from 'umi';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface LayoutProps {
  [key: string]: any;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <React.Fragment>
      {/*LayoutComp*/}
      {/*{props.children}*/}
      {/*props: {JSON.stringify(props)}<br/>*/}

      <LayoutErrorBoundary>
        <Outlet />
      </LayoutErrorBoundary>
    </React.Fragment>
  );
};

Layout.defaultProps = {};
Layout.propTypes = {};

export default React.memo(Layout);
