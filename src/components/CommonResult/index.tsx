import { Result as AntdResult, Button, ResultStatusType } from 'antd';
import React, { ReactNode } from 'react';
// import styles from "./index.module.less";
// import classNames from "classnames";

export interface ResultProps {
  [key: string]: any;
  icon: ReactNode;
  status: ResultStatusType;
  subTitle: ReactNode;
  title: ReactNode;
  extra: ReactNode;
  click: () => void;
}

const CommonResult: React.FC<ResultProps> = (props: ResultProps) => {
  const handleExtraOnClick = () => {};

  const {
    click,
    icon,
    status,
    subTitle,
    title,
    extra = (
      <Button type="primary" onClick={handleExtraOnClick}>
        Back Home
      </Button>
    ),
  } = props;

  return (
    <React.Fragment>
      <AntdResult
        status={status}
        title={title}
        subTitle={subTitle}
        extra={extra}
      />
    </React.Fragment>
  );
};

export default React.memo(CommonResult);
