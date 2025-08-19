import { useState } from "react";

import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuButtonClick = () => {
    document
      .getElementById("hamburgerMenuButton")
      .classList.toggle("active-menu");

    document
      .getElementById("navbarMenu")
      .classList.toggle("active-navbar-menu");

    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex justify-between items-center w-full p-9">
        <div>
          <a href="" className="brand text-xl font-bold text-white">
            Vista Eloria.
          </a>
        </div>
        <div>
          <button
            id="hamburgerMenuButton"
            onClick={() => handleMenuButtonClick()}
            className="block"
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      <NavbarMenu />
    </>
  );
};

export default Navbar;
