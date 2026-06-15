interface IChip {
  label: string;
  isOnline?: boolean;
  variant: "primary" | "secondary";
}

const Chip = ({ label, isOnline, variant }: IChip) => {
  const onlineDot = isOnline && <div className="chip__dot"></div>;

  const chipClasses = {
    primary: "chip chip--primary",
    secondary: "chip chip--secondary",
  };

  return (
    <div className={chipClasses[variant]}>
      {onlineDot}
      {label}
    </div>
  );
};

export default Chip;
