import classNames from "classnames";
import React from "react";
import { PageHead, PageHeadProps } from "../atoms/PageHead";
import { PageFooter, PageFooterProps } from "../organisms/PageFooter";
import { PageHeader, PageHeaderProps } from "../organisms/PageHeader";
import style from "./DefaultTemplate.module.scss";
import { RootTemplate } from "./RootTemplate";

type DefaultTemplateProps = {
  headProps: PageHeadProps;
  headerProps: PageHeaderProps;
  asideProps?: PageHeaderProps;
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
          })}
        >
          {/* <div className={style.DefaultTemplate__aside}>{children}</div> */}
          <div className={style.DefaultTemplate__main}>{children}</div>
        </div>
        <div className={style.DefaultTemplate__footer}>
          <PageFooter {...footerProps} />
        </div>
      </div>
    </RootTemplate>
  );
};
