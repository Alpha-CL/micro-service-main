import React from 'react';
// import classNames from "classnames";

export interface DemoProps {
  [key: string]: any;
}

const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  return (
    <React.Fragment>
      DemoComp
      {props.children}
      props: {JSON.stringify(props)}
      <br />
    </React.Fragment>
  );
};

Demo.defaultProps = {};
Demo.propTypes = {};

export default React.memo(Demo);
