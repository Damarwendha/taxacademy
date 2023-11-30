import Link from "next/link";
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../Logo";

function Navbar() {
  return (
    <NavbarUi fluid className="relative drop-shadow-md">
      <NavbarBrand as={Link} href="/">
        <Logo width={35} height={35} className="mr-1" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-classic-black">
          Taxacademy
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <div className="absolute left-0 z-40 flex flex-col w-full bg-grey top-16 sm:w-auto sm:bg-transparent sm:static sm:gap-10 sm:flex-row">
        <NavbarCollapse>
          <NavbarLink as={Link} href="#" active className="text-center">
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-center">
            About
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </NavbarUi>
  );
}

export default Navbar;
