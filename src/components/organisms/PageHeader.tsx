import React from "react";
import style from "./PageHeader.module.scss";

export type PageHeaderProps = {
  //
};
export const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <header className={style.PageHeader}>
      <div className={style.PageHeader__inner}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={style.PageHeader__title}>
          up-tri&apos;s site
        </a>
      </div>
    </header>
  );
};
