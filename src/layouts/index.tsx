import { Outlet } from '@umijs/max';
import React from 'react';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface LayoutProps {
  [key: string]: any;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

Layout.defaultProps = {};
Layout.propTypes = {};

export default React.memo(Layout);
