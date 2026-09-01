import { ReactNode } from "react";

interface IChip {
  label: string;
  isOnline?: boolean;
  variant: "primary" | "secondary" | "primaryShadow";
  size?: "normal" | "sm" | "xs";
  iconStart?: ReactNode;
}

const Chip = ({
  label,
  isOnline,
  variant,
  iconStart,
  size = "normal",
}: IChip) => {
  const onlineDot = isOnline && <div className="chip__dot"></div>;
  const iconAtStart = iconStart && iconStart;

  const chipVariantClasses = {
    primary: "chip chip--primary",
    primaryShadow: "chip chip--primary-shadow",
    secondary: "chip chip--secondary",
  };

  const chipSizeClasses = {
    normal: "chip chip--size-normal",
    sm: "chip chip--size-sm",
    xs: "chip chip--size-xs",
  };

  const className = `${chipVariantClasses[variant]} ${chipSizeClasses[size]}`;

  return (
    <div className={className}>
      {onlineDot}
      {iconAtStart}
      {label}
    </div>
  );
};

export default Chip;
