import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import LangSwitcher from "./LangSwitcher";
import initTranslations from "@/app/i18n";
import DesktopMenu from "./DesktopMenu";

const Header = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ["header"]);
  const navItems = [
    {
      text: t("about"),
      href: "/about",
    },
    {
      text: t("work"),
      href: "/",
    },
    {
      text: t("contact"),
      href: "/contact",
    },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background w-full md:py-8 lg:py-10 py-5 px-5 lg:px-16 flex items-center justify-between">
      <nav className="flex justify-between lg:gap-24 w-full md:gap-10 items-center font-medium">
        <Link href={"/"} className="text-xl md:w-1/5 lg:w-fit md:text-left">
          <Image
            alt="Miso Design Logo"
            className="w-40"
            height={282}
            width={1707}
            src={"/img/logo.png"}
          />
        </Link>
        <div className="relative py-3 md:hidden z-50">
          <MobileMenu navItems={navItems} locale={locale} />
        </div>
        <DesktopMenu navItems={navItems} />
        <div className="gap-5 hidden order-2 md:flex w-1/5 justify-end">
          <LangSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
