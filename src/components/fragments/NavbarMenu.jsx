import NavbarLink from "./NavbarLink";
import Button from "../elements/Button";

const NavbarMenu = () => {
  return (
    <>
      <div
        id="navbarMenu"
        className="navbar-menu absolute z-40 bg-black/10 backdrop-blur-sm h-screen w-screen flex flex-col justify-center items-center p-9 transition-all duration-500"
      >
        <ul className="flex flex-col items-center gap-10 mt-16">
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Destination</NavbarLink>
          <NavbarLink>Contacts</NavbarLink>
        </ul>
        <div className="w-full mt-10">
          <Button Class="cta-button w-full">Buy Ticket</Button>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <i className="bi bi-facebook text-2xl text-white"></i>
          <i className="bi bi-instagram text-2xl text-white"></i>
          <i className="bi bi-tiktok text-2xl text-white"></i>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
