import React, { type ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  title?: string;
  alt?: string;
}

function Image({ src, title = "Image", alt = "Image", ...restProps }: ImageProps) {
  return <img alt="" title="" src={src} {...restProps} />;
}

export default Image;
