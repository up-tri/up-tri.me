import React from "react";
import { appConfig } from "../../lib/consts/appConfig";
import style from "./Copyright.module.scss";

export type CopyrightProps = {
  tailwind?: true;
};
export const Copyright: React.FC<CopyrightProps> = (props) => {
  const className = props.tailwind
    ? "text-center text-sm text-gray-400"
    : style.Copyright;
  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{ __html: appConfig.copyright }}
    />
  );
};
