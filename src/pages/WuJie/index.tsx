import React from 'react';
import WujieReact from 'wujie-react';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface WuJieProps {
  [key: string]: any;
}

const WuJie: React.FC<WuJieProps> = (props: WuJieProps) => {
  return (
    <React.Fragment>
      {/*WuJieComp*/}
      {/*{props.children}*/}
      {/*props: {JSON.stringify(props)}<br/>*/}

      <div style={{ border: '1px solid black' }}>
        <WujieReact
          height="100%"
          width="100%"
          name="micro-sub-app"
          url={'//localhost:8801/'}
          sync={true}
          props={props}
          alive={true}
        />
      </div>
    </React.Fragment>
  );
};

WuJie.defaultProps = {};
WuJie.propTypes = {};

export default React.memo(WuJie);
