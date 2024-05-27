import React from "react";
import style from "./PageAside.module.scss";

export type PageAsideProps = {
  //
};
export const PageAside: React.FC<PageAsideProps> = () => {
  return (
    <header className={style.PageAside}>
      <div className={style.PageAside__inner}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className={style.PageAside__title}>
          up-tri&apos;s site
        </a>
      </div>
    </header>
  );
};
