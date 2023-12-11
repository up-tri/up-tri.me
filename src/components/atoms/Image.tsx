import React from "react";
import { j } from "../common/joinClassNames";
import { WithClassName } from "../common/withClassName";
import style from "./Image.module.scss";

export type ImageProps = WithClassName<{
  src: string;
  alt: string;
}>;
export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={j(style.Image, className)} />;
};
