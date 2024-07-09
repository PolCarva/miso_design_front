"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  text: string;
  href: string;
};

const DesktopMenu = ({ navItems }: { navItems: NavItem[] }) => {
  const path = usePathname();


  return (
    <ul className="md:flex flex-col md:flex-row md:translate-x-0 md:static justify-center items-center gap-8 md:justify-center lg:flex-1 lg:justify-start md:space-x-8 hidden">
      {navItems.map((item) => (
        <li key={item.text}>
          <Link href={item.href}>
            <span className={`before:h-px relative before:-bottom-1 before:absolute ${path === "/ja" && item.href === "/" && "font-bold"} ${path === item.href || path === `/ja${item.href}` ? "font-bold" : "font-light"}`}>
              {item.text}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
