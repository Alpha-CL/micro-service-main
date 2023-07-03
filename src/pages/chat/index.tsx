import React, {useState, useEffect, useImperativeHandle, useRef} from "react";
import { MicroApp } from 'umi';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface ChatProps {
  [key: string]: any;
}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {

  const defaultProps: any = {};
  const mixedProps: any = Object.assign({}, defaultProps, props);

  return (
    <React.Fragment>

      {/*Main-ChatComp*/}
      {/*{props.children}*/}
      {/*props: {JSON.stringify(props)}<br />*/}

      <MicroApp name="chat" autoCaptureError />

    </React.Fragment>
  );
};

Chat.defaultProps = {};
Chat.propTypes = {};

export default React.memo(Chat);