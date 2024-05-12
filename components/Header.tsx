"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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


  return (
    <header className="sticky top-0 z-50 bg-background w-full md:py-8 lg:py-10 py-5 px-5 lg:px-16 flex items-center justify-between">
      <nav className="flex justify-between lg:gap-24 w-full md:gap-10 items-center font-medium">
        <Link href={"/"} className="text-xl md:w-1/5 lg:w-fit md:text-left">
          MISO DESIGN <span className="block"> 味噌デザイン</span>
        </Link>
        <ul className="md:flex md:justify-center lg:flex-1 lg:justify-start space-x-8 hidden">
          {navItems.map((item) => (
            <li key={item.text}>
              <Link
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
