interface IChip {
  label: string;
  isOnline?: boolean;
  variant: "primary" | "secondary";
  size?: "normal" | "xs";
}

const Chip = ({ label, isOnline, variant, size = "normal" }: IChip) => {
  const onlineDot = isOnline && <div className="chip__dot"></div>;

  const chipVariantClasses = {
    primary: "chip chip--primary",
    secondary: "chip chip--secondary",
  };

  const chipSizeClasses = {
    normal: "chip chip--size-normal",
    xs: "chip chip--size-xs",
  };

  return (
    <div className={`${chipVariantClasses[variant]} ${chipSizeClasses[size]}`}>
      {onlineDot}
      {label}
    </div>
  );
};

export default Chip;
