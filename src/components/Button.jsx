const Button = (props) => {
  const { Class, variant = "primary", size = "small", children } = props;

  const variants = {
    primary: "bg-slate-950 text-white hover:scale-105",
    transparent: "bg-transparent text-white hover:scale-105",
  };

  const sizes = {
    small: "h-12",
  };

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} px-4 rounded-xl ${Class} transition-all duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
