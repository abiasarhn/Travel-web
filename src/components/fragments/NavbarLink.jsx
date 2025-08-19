const NavbarLink = (props) => {
  const { to, children } = props;

  return (
    <>
      <li className="border-b-2 border-transparent px-2 transition-all duration-300 hover:border-white">
        <a href={to} className="text-lg text-white">
          {children}
        </a>
      </li>
    </>
  );
};

export default NavbarLink;
