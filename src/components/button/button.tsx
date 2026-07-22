import type { MouseEventHandler, ReactNode } from "react";

interface IButton {
  variant: "primary" | "secondary";
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({
  onClick,
  variant,
  startIcon,
  endIcon,
  children,
  className = "",
}: IButton) => {
  const classes = {
    primary: "button button--primary",
    secondary: "button button--secondary",
  };
  return (
    <button className={`${classes[variant]} ${className}`} onClick={onClick}>
      {startIcon && <span className="text-[14px]">{startIcon}</span>}
      {children}
      {endIcon && <span className="text-[14px]">{endIcon}</span>}
    </button>
  );
};

export default Button;
