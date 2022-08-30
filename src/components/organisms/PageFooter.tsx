import React from "react";
import { appConfig } from "../../lib/consts/appConfig";
import style from "./PageFooter.module.scss";

export type PageFooterProps = {
  //
};
export const PageFooter: React.FC<PageFooterProps> = () => {
  return (
    <div className={style.PageFooter}>
      <p className={style.PageFooter__copyright}>{appConfig.copyright}</p>
    </div>
  );
};
