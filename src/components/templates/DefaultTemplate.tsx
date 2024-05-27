import classNames from "classnames";
import React from "react";
import { PageHead, PageHeadProps } from "../atoms/PageHead";
import { PageAside, PageAsideProps } from "../organisms/PageAside";
import { PageFooter, PageFooterProps } from "../organisms/PageFooter";
import { PageHeader, PageHeaderProps } from "../organisms/PageHeader";
import style from "./DefaultTemplate.module.scss";
import { RootTemplate } from "./RootTemplate";

type DefaultTemplateProps = {
  headProps: PageHeadProps;
  headerProps: PageHeaderProps;
  asideProps?: PageAsideProps;
  footerProps: PageFooterProps;
  isPost?: boolean;
  children: React.ReactNode;
};
export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  headProps,
  headerProps,
  asideProps,
  footerProps,
  isPost = false,
  children,
}) => {
  return (
    <RootTemplate>
      <PageHead {...headProps} />
      <div className={style.DefaultTemplate}>
        <div className={style.DefaultTemplate__header}>
          <PageHeader {...headerProps} />
        </div>
        <div
          className={classNames({
            [style.DefaultTemplate__body]: true,
            [style["DefaultTemplate__body--post"]]: isPost,
            [style["DefaultTemplate__body--withAside"]]: !!asideProps,
          })}
        >
          <main className={style.DefaultTemplate__main}>{children}</main>
          {asideProps && (
            <aside className={style.DefaultTemplate__aside}>
              <PageAside {...asideProps} />
            </aside>
          )}
        </div>
        <div className={style.DefaultTemplate__footer}>
          <PageFooter {...footerProps} />
        </div>
      </div>
    </RootTemplate>
  );
};
