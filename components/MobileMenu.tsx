"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import LangSwitcher from "./LangSwitcher";

type navItem = {
  text: string;
  href: string;
};

const MobileMenu = ({ locale, navItems }: { locale: string, navItems: navItem[] }) => {
  const path = usePathname();
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <button
        className="text-gray-500 z-50 w-10 h-10 relative focus:outline-none"
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
      <ul
        className={`flex flex-col transition duration-500 ease-in-out md:translate-x-0 md:static justify-center items-center gap-8
         md:justify-center lg:flex-1 lg:justify-start md:space-x-8 fixed w-full h-full inset-0 bg-background ${
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
        <li className="flex absolute bottom-5 gap-5 md:hidden">
          <LangSwitcher locale={locale} />
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
