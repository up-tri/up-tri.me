import React from "react";
import { j } from "../common/joinClassNames";
import { WithClassName } from "../common/withClassName";
import style from "./Image.module.scss";

export type ImageCaptionProps = WithClassName<{
  captionText: string;
}>;
export const ImageCaption: React.FC<ImageCaptionProps> = ({
  captionText,
  className,
}) => {
  return (
    <figcaption className={j(style.ImageCaption, className)}>
      {captionText}
    </figcaption>
  );
};
