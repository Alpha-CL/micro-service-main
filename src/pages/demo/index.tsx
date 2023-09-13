import MicroServiceApp from '@/components/MicroServiceApp';
import React from 'react';
// import classNames from "classnames";

export interface DemoProps {
  [key: string]: any;
}

const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  return (
    <React.Fragment>
      <MicroServiceApp name={'micro-sub-app'} />
    </React.Fragment>
  );
};

Demo.defaultProps = {};
Demo.propTypes = {};

export default React.memo(Demo);
