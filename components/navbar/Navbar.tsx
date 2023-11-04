"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

import Dropdown from "./Dropdown";
import { useRouter, usePathname } from "next/navigation";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showSeach, setShowSeach] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleClick = () => {
    setIsActive(!isActive);
    setShowSeach(false);
  };
  const navLinks = [
    {
      name: "IABH Division",
      href: "/",
      options: [
        {
          name: "Clinical Psychology",
          href: "/",
        },
        {
          name: "Health Psychology",
          href: "/",
        },
        {
          name: "Counselling Psychology",
          href: "/",
        },
        {
          name: "Sports Psychology",
          href: "/",
        },
        {
          name: "Positive Psychology",
          href: "/",
        },
        {
          name: "Social Work",
          href: "/",
        },
        {
          name: "Special Education",
          href: "/",
        },
        {
          name: "Physiotherpy and Occupational Therapy",
          href: "/",
        },
        {
          name: "Psychiatry",
          href: "/",
        },
        {
          name: "Mental Health Nursing",
          href: "/",
        },
      ],
    },

    {
      name: "IABH Program",
      href: "/",
      options: [
        {
          name: "Research and Publications",
          href: "/",
        },
        {
          name: "Awareness Programs",
          href: "/",
        },
        {
          name: "Professional Trainings",
          href: "/",
        },
        {
          name: "Workshops",
          href: "/",
        },
        {
          name: "Annual Conferences",
          href: "/",
        },
        {
          name: "Monitoring",
          href: "/",
        },
      ],
    },
    {
      name: "Membership",
      href: "/",
      options: [
        {
          name: "Professional Life Membership",
          href: "/",
        },
        {
          name: "Student Membership",
          href: "/",
        },
        {
          name: "Institutional Membership",
          href: "/",
        },
        {
          name: "Allied Membership",
          href: "/",
        },
      ],
    },
    {
      name: "Events",
      href: "/",
    },
  ];
  return (
    <>
      <header className="text-gray-600 z-50 py-2   body-font sticky top-0 bg-neutral-100/80  transition-all duration-500 backdrop-blur-xl">
        <div className="container mx-auto flex lg:px-2 lg:py-2 flex-row items-center justify-between gap-2 z-10">
          <nav className="hidden lg:flex items-center justify-center text-base w-full">
            {navLinks.map(val => {
              return (
                <div key={val?.name} className="mr-5">
                  {val?.options ? (
                    <Dropdown data={val} />
                  ) : (
                    <Link
                      href={val?.href}
                      className={` last:mr-0 cursor-pointer hover:text-gray-900  transition-all duration-200 ${
                        pathname === val.href ? "" : ""
                      }`}
                    >
                      {val?.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
          <Link
            href="/"
            aria-label="Home"
            className="flex order-first w-fit title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center"
          >
            Logo
            <span className="hidden md:block ml-3 text-xl">Iabh</span>
          </Link>
          <div className="flex gap-2">
            <button className="text-white whitespace-nowrap bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
              Membership Login
            </button>
            <Link
              href="/join"
              className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg"
            >
              Join
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:flex lg:items-center lg:justify-end">
            <div className="lg:hidden">
              <MobileMenu isActive={isActive} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </header>
      {isActive && (
        <div className="fixed z-10 bg-neutral-100 top-0 h-screen :bg-neutral-900 w-full flex flex-col items-center justify-center gap-10">
          {navLinks.map(val => {
            return (
              <Link
                key={val.name}
                href={val.href}
                className="cursor-pointer text-3xl hover:text-gray-900 :hover:text-white"
              >
                {val.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
