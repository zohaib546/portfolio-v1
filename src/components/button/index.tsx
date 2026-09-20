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
  ...props
}: IButton) => {
  const classes = {
    primary: "button button--primary",
    secondary: "button button--secondary",
  };
  const classNames = `${classes[variant]} ${className ?? ""}`;

  const content = (
    <>
      {startIcon && <span className="text-[14px]">{startIcon}</span>}
      {children}
      {endIcon && <span className="text-[14px]">{endIcon}</span>}
    </>
  );
  return (
    <button className={classNames} onClick={onClick} {...props}>
      {content}
    </button>
  );
};

export default Button;
