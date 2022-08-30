import React from "react";
import { Image, ImageProps } from "../atoms/Image";
import { ImageCaption, ImageCaptionProps } from "../atoms/ImageCaption";
import { j } from "../common/joinClassNames";
import { WithClassName } from "../common/withClassName";
import style from "./ImageWithCaption.module.scss";

export type ImageWithCaptionProps = WithClassName<{
  image: ImageProps;
  caption: ImageCaptionProps;
}>;
export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  image,
  caption,
  className,
}) => {
  return (
    <figure className={j(style.ImageWithCaption, className)}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...image} />
      <ImageCaption {...caption} />
    </figure>
  );
};
