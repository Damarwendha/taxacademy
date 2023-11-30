import Link from "next/link";
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
  Button,
} from "flowbite-react";
import Logo from "../Logo";

function Navbar() {
  return (
    <NavbarUi fluid className="relative z-50 drop-shadow-md">
      <NavbarBrand as={Link} href="/">
        <Logo width={35} height={35} className="mr-1" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-classic-black">
          Taxacademy
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <div className="absolute left-0 top-14 border-t-2 sm:border-t-0 z-50 flex flex-col w-full bg-classic-black sm:w-auto sm:bg-transparent sm:static sm:gap-10 sm:flex-row">
        <NavbarCollapse>
          <NavbarLink as={Link} href="#" className="border-y-0 hover:bg-classic-black sm:-mr-6">
            <Button className="center-this sm:text-classic-black sm:border-gray-400 rounded-none">Log in</Button>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="border-y-0 bg-brand-primary hover:bg-purple-700">
            <Button className="center-this sm:hover:bg-brand-primary rounded-none">Sign up</Button>
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </NavbarUi>
  );
}

export default Navbar;
