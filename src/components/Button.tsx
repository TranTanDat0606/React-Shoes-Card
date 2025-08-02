import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string;
  className?: string;
  icon?: React.ReactNode;
}

function Button({ buttonText = "Default Button", className = "", icon, ...restProps }: ButtonProps) {
  return (
    <button className={`shopItem_button ${className}`} {...restProps}>
      {icon || buttonText}
    </button>
  );
}

export default Button;
