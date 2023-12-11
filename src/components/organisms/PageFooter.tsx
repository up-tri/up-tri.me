import React from "react";
import { Copyright } from "../atoms/Copyright";
import style from "./PageFooter.module.scss";

export type PageFooterProps = {
  //
};
export const PageFooter: React.FC<PageFooterProps> = (_) => {
  return (
    <footer className={style.PageFooter}>
      <div className={style.PageFooter__inner}>
        <div className={style.PageFooter__copyright}>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
