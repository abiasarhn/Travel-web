const Stats = (props) => {
  const { Class, color, amount, description } = props;

  const colors = {
    white: "text-white",
    black: "text-slate-950",
  };

  return (
    <>
      <div className={`${Class} p-4 rounded-2xl`}>
        <h2 className={`stats-amount text-xl ${colors[color]}`}>{amount}</h2>
        <p className={`text-base ${colors[color]} opacity-80`}>{description}</p>
      </div>
    </>
  );
};

export default Stats;
