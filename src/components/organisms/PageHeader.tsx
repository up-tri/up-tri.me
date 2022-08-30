import React from "react";
import style from "./PageHeader.module.scss";

export type PageHeaderProps = {
  //
};
export const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <div className={style.PageHeader}>
      <div className={style.PageHeader__title}>up-tri&apos;s site</div>
    </div>
  );
};
