const Paragraf = (props) => {
  const { size = "standard", color = "white", Class, children } = props;

  const sizes = {
    standard: "text-base",
    big: "text-xl",
  };

  const colors = {
    black: "text-slate-950",
    white: "text-white",
  };

  return (
    <>
      <p className={`${sizes[size]} ${colors[color]} ${Class}`}>{children}</p>
    </>
  );
};

export default Paragraf;
