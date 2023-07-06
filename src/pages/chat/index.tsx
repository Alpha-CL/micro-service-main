import React from 'react';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface ChatProps {
  [key: string]: any;
}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {
  return <React.Fragment>ChatComponent</React.Fragment>;
};

Chat.defaultProps = {};
Chat.propTypes = {};

export default React.memo(Chat);
