import { type HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  className?: string;
}

function Typography({ text = "", className = "", ...restProps }: TypographyProps) {
  return (
    <div className={`shopItem_description ${className}`} {...restProps}>
      {text}
    </div>
  );
}

export default Typography;
