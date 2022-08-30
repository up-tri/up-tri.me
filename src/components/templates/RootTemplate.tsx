import Head from "next/head";
import React from "react";
import { appConfig } from "../../lib/consts/appConfig";
import { InlineScript } from "../atoms/InlineScript";

type RootTemplateProps = {
  head?: React.ReactNode;
  children: React.ReactNode;
};
export const RootTemplate: React.FC<RootTemplateProps> = ({
  head,
  children,
}) => {
  return (
    <>
      <Head>
        {appConfig.nodeEnv === "production" && (
          <InlineScript
            id='head-gtm'
            content={`
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-KXDM84Q');
        `}
          />
        )}
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' sizes='16x16' href='/favicon.ico' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        {head}
      </Head>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-KXDM84Q'
          height='0'
          width='0'
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {children}
    </>
  );
};
