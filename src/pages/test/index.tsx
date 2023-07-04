import React from 'react';
// import styles from "./index.module.less";
// import classNames from "classnames";
// import CSSMotion from 'rc-motion';

const Test = (props) => {
  let defaultProps = {};
  const mixedProps = Object.assign({}, defaultProps, props);

  return (
    <React.Fragment>
      TestComp
      {props.children}
      props: {JSON.stringify(props)}
      <br />
    </React.Fragment>
  );
};

Test.defaultProps = {};
Test.propTypes = {};

export default React.memo(Test);
