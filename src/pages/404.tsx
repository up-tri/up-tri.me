import classNames from "classnames";
import type { NextPage } from "next";
import { PageHeadProps } from "../components/atoms/PageHead";
import { PageFooterProps } from "../components/organisms/PageFooter";
import { PageHeaderProps } from "../components/organisms/PageHeader";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import style from "./404.module.scss";

const NotFoundPage: NextPage = () => {
  const headProps: PageHeadProps = {
    pageType: "others",
    title: "404 - up-tri",
    description: "",
    keywords: [],
  };
  const headerProps: PageHeaderProps = {
    //
  };
  const footerProps: PageFooterProps = {
    //
  };

  return (
    <DefaultTemplate
      headProps={headProps}
      headerProps={headerProps}
      footerProps={footerProps}
    >
      <div className={style.NotFoundPage}>
        <h1 className={style.NotFoundPage__title}>404 Not Found.</h1>
        <p className={style.NotFoundPage__subtitle}>
          コンテンツが存在しません。
        </p>
        <div className={style.NotFoundPage__links}>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            id="uptrime__404_returnhome_0"
            href="/"
            className={classNames(
              style.NotFoundPage__linkButton,
              style["NotFoundPage__linkButton--returnHome"]
            )}
          >
            ❯ return to home
          </a>
          {/* <a
            id="uptrime__404_goblog_0"
            href="/blog"
            className={classNames(
              style.NotFoundPage__linkButton,
              style["NotFoundPage__linkButton--goBlog"]
            )}
          >
            ❯ Blogはこちら
          </a> */}
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default NotFoundPage;
