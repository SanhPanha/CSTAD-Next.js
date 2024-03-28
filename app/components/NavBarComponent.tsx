import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function NavBarComponent () {
  return (
    <>
      <header className=" bg-primary py-2 px-4">
        <Navbar className="container mx-auto bg-primary">
          <NavbarToggle className="text-white border-0 hover:text-primary sm:left-0 delay-75" />
          <NavbarBrand as={Link} href="/">
            <img
              src="https://istad.co/resources/img/logo_md.png"
              className="mr-3 h-8"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-bold text-white tracking-[.25em]">
              CSTAD
            </span>
          </NavbarBrand>
          <NavbarCollapse className="text-xl">
            <NavbarLink
              href="/"
              className="text-lg text-white hover:text-primary lg:hover:text-white"
            >
              Home
            </NavbarLink>
            <NavbarLink
              href="/enroll"
              className="text-lg text-white hover:text-primary lg:hover:text-white"
            >
              Enroll
            </NavbarLink>
            <NavbarLink
              href="/course"
              className="text-lg text-white hover:text-primary lg:hover:text-white"
            >
              Course
            </NavbarLink>
            <NavbarLink
              href="/news"
              className="text-lg text-white hover:text-primary lg:hover:text-white"
            >
              IT News
            </NavbarLink>
            <NavbarLink
              href="/job"
              className="text-lg text-white hover:text-primary lg:hover:text-white"
            >
              Job Opportunity
            </NavbarLink>
            <NavbarLink
              href="/about"
              className="text-lg text-white hover:text-primary lg:hover:text-white"
            >
              About Us
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </header>
    </>
  );
};
