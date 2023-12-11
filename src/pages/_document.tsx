import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://assets.up-tri.me/css/all.min.css"
        />
        <link
          rel="preload"
          as="style"
          href="https://assets.up-tri.me/css/sharp-solid.min.css"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&Barlow:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <link
          rel="stylesheet"
          href="https://assets.up-tri.me/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://assets.up-tri.me/css/sharp-solid.min.css"
        />
      </body>
    </Html>
  );
}
