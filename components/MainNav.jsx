import Link from "next/link";
import {
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarLink,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Logo from "./Logo";

function Navbar() {
  return (
    <NavbarUi fluid className="relative z-50 drop-shadow-md">
      <NavbarBrand as={Link} href="/">
        <Logo size="md" className="mr-2" src="/images/brand-logo.webp" />
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
            className="h-10 rounded-none sm:w-20 border-y-0 hover:bg-classic-black sm:-mr-6 center-this sm:text-classic-black sm:border-gray-400"
          >
            <span className="w-full h-full text-gray-400 sm:hover:bg-gray-200 center-children">
              Log in
            </span>
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="#"
            className="h-full rounded-none sm:w-20 border-y-0 bg-brand-primary center-this text-classic-white hover:bg-purple-700"
          >
            <span className="w-full h-full hover:bg-purple-700 center-children">
              Sign up
            </span>
          </NavbarLink>
        </NavbarCollapse>
      </div>
    </NavbarUi>
  );
}

export default Navbar;
