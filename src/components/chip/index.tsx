import { ReactNode } from "react";

interface IChip {
  label: string;
  isOnline?: boolean;
  variant: "primary" | "secondary";
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
    secondary: "chip chip--secondary",
  };

  const chipSizeClasses = {
    normal: "chip chip--size-normal",
    sm: "chip chip--size-sm",
    xs: "chip chip--size-xs",
  };

  return (
    <div className={`${chipVariantClasses[variant]} ${chipSizeClasses[size]}`}>
      {onlineDot}
      {iconAtStart}
      {label}
    </div>
  );
};

export default Chip;
