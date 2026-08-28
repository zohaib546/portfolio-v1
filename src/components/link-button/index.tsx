import type { ReactNode } from "react";

interface ILinkButton {
  variant: "primary" | "secondary";
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  href: string;
}

const LinkButton = ({
  variant,
  startIcon,
  endIcon,
  children,
  className = "",
  href,
}: ILinkButton) => {
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
    <a href={href} className={classNames}>
      {content}
    </a>
  );
};

export default LinkButton;
