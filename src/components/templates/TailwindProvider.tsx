import Head from "next/head";
import React from "react";

export const TailwindProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <>
    <Head>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Noto+Sans+JP:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </>
);
