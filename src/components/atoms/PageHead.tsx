import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { appConfig } from "../../lib/consts/appConfig";

export const PageTypes = {
  top: "top",
  list: "list",
  post: "post",
  others: "others",
} as const;
export type PageType = typeof PageTypes[keyof typeof PageTypes];

type _PageHeadProps = {
  description: string;
  keywords: string[];
};
type TopPageHeadProps = _PageHeadProps & {
  pageType: typeof PageTypes.top;
};
type ListPageHeadProps = _PageHeadProps & {
  pageType: typeof PageTypes.list;
  title: string;
};
type PostPageHeadProps = _PageHeadProps & {
  pageType: typeof PageTypes.post;
  title: string;
};
type OtherPageHeadProps = _PageHeadProps & {
  pageType: typeof PageTypes.others;
  title: string;
};
export type PageHeadProps =
  | TopPageHeadProps
  | ListPageHeadProps
  | PostPageHeadProps
  | OtherPageHeadProps;
export const PageHead: React.FC<PageHeadProps> = (props) => {
  const router = useRouter();

  const currentUrl = `${appConfig.siteProtocol}://${appConfig.siteHost}${router.pathname}`;
  const displayedTitle =
    props.pageType === "top"
      ? appConfig.siteName
      : `${props.title} - ${appConfig.siteName}`;
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <title>{displayedTitle}</title>
        <meta name='description' content={props.description} />
        <meta name='keywords' content={props.keywords.join(",")} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={currentUrl} />
        <meta property='og:title' content={displayedTitle} />
        <meta property='og:description' content={props.description} />
        <meta property='og:image' content={appConfig.siteImage.url} />
        <meta
          property='og:image:width'
          content={`${appConfig.siteImage.width}`}
        />
        <meta
          property='og:image:height'
          content={`${appConfig.siteImage.height}`}
        />
        <meta property='og:image:alt' content={displayedTitle} />
        <meta property='og:site_name' content={appConfig.siteName} />
        <meta property='og:locale' content='ja_JP' />
      </Head>
    </>
  );
};
