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
        <Logo size="md" className="mr-2" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-classic-black">
          Taxacademy
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <div className="absolute left-0 z-20 flex flex-col w-full top-14 sm:border-t-0 bg-classic-black sm:w-auto sm:bg-transparent sm:static sm:gap-10 sm:flex-row">
        <NavbarCollapse>
          <NavbarLink
            as={Link}
            href="#"
            className="border-y-0 hover:bg-classic-black sm:-mr-6"
          >
            <Button className="rounded-none center-this sm:text-classic-black sm:border-gray-400">
              Log in
            </Button>
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="#"
            className="border-y-0 bg-brand-primary hover:bg-purple-700"
          >
            <Button className="rounded-none center-this sm:hover:bg-brand-primary">
              Sign up
            </Button>
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </NavbarUi>
  );
}

export default Navbar;
