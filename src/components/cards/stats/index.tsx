interface IStatsCard {
  title: string;
  description: string;
}

const StatsCard = ({ title, description }: IStatsCard) => {
  return (
    <div className="statscard">
      <h3 className="statscard__title">{title}</h3>
      <p className="statscard__desc">{description}</p>
    </div>
  );
};

export default StatsCard;
