const Stats = (props) => {
  const { amount, description } = props;

  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm w-36 p-4 rounded-2xl">
        <h2 className="stats-amount text-xl text-white">{amount}</h2>
        <p className="text-base text-white opacity-80">{description}</p>
      </div>
    </>
  );
};

export default Stats;
