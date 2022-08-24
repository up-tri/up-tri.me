import Script from "next/script";
import React from "react";

export type InlineScriptProps = {
  id: string;
  content: string;
};
export const InlineScript: React.FC<InlineScriptProps> = ({ id, content }) => {
  return <Script id={id} dangerouslySetInnerHTML={{ __html: content }} />;
};
