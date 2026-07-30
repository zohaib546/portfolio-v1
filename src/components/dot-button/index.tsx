import { ReactNode } from "react";

type DotButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const DotButton = (props: DotButtonProps) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export default DotButton;
