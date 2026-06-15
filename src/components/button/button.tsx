import type { MouseEventHandler, ReactNode } from "react";

interface IButton {
  variant: "primary" | "secondary";
  endIcon?: ReactNode;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ onClick, variant, endIcon, children }: IButton) => {
  const buttonClasses = {
    primary: "button button--primary",
    secondary: "button button--secondary",
  };
  return (
    <button className={buttonClasses[variant]} onClick={onClick}>
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
