import React from 'react';
import { MicroApp } from 'umi';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface ChatProps {
  [key: string]: any;
}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
  return (
    <React.Fragment>
      {/*Main-ChatComp*/}
      {/*{props.children}*/}
      {/*props: {JSON.stringify(props)}<br />*/}
      ----------------------------------------------------------------
      <MicroApp
        name="chat"
        // loader={(loading) => {}}
        // errorBoundary={(error) => {}}
        // autoCaptureError
      />
      ----------------------------------------------------------------
    </React.Fragment>
  );
};

Chat.defaultProps = {};
Chat.propTypes = {};

export default React.memo(Chat);
