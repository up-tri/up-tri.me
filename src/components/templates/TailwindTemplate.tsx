import React from "react";
import { PageHead, PageHeadProps } from "../atoms/PageHead";
import { RootTemplate } from "./RootTemplate";
import style from "./TailwindTemplate.module.scss";

type TailwindTemplateProps = {
  headProps: PageHeadProps;
  children: React.ReactNode;
};
export const TailwindTemplate: React.FC<TailwindTemplateProps> = ({
  headProps,
  children,
}) => {
  return (
    <RootTemplate
      head={
        <>
          <link
            href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Noto+Sans+JP:wght@500&display=swap'
            rel='stylesheet'
          />
        </>
      }
    >
      <PageHead {...headProps} />
      <div className={style.TailwindTemplate}>{children}</div>
    </RootTemplate>
  );
};
