"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

const navItems = [
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Work",
    href: "/",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const path = usePathname();
  const [activeLang, setActiveLang] = useState("EN");
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="sticky top-0 z-50 bg-background w-full md:py-8 lg:py-10 py-5 px-5 lg:px-16 flex items-center justify-between">
      <nav className="flex justify-between lg:gap-24 w-full md:gap-10 items-center font-medium">
        <Link href={"/"} className="text-xl md:w-1/5 lg:w-fit md:text-left">
          MISO DESIGN <span className="block"> 味噌デザイン</span>
        </Link>
        <div className="relative py-3 md:hidden z-50">
          <button
            className="text-gray-500 w-10 h-10 relative focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {activeMenu ? "Close" : "Open"} main menu
            </span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block rounded-full absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  activeMenu ? "rotate-45 -translate-y-1.5" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`block rounded-full absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  activeMenu ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
        <ul
          className={`flex flex-col transition duration-500 ease-in-out md:flex-row md:translate-x-0 md:static justify-center items-center gap-8
         md:justify-center lg:flex-1 lg:justify-start md:space-x-8 
         fixed w-full h-full inset-0 bg-background ${
           activeMenu ? "translate-x-0" : "translate-x-full"
         }`}
        >
          {navItems.map((item) => (
            <li key={item.text}>
              <Link
                onClick={toggleMenu}
                href={item.href}
                className={`before:h-px relative before:-bottom-1 before:absolute ${
                  path === item.href ||
                  (item.text === "Work" && path.startsWith("/projects"))
                    ? "text-black before:w-full before:bg-black"
                    : " before:w-0 text-gray before:bg-gray hover:before:w-full before:transition-all"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="gap-5 hidden md:flex w-1/5 justify-end">
          <button
            onClick={() => setActiveLang("EN")}
            className={`text-gray hover:text-black transition ${
              activeLang === "EN" && "text-black"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => {
              setActiveLang("JP");
            }}
            className={`text-gray hover:text-black transition ${
              activeLang === "JP" && "text-black"
            }`}
          >
            JP
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
