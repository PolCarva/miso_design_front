"use client";

import { usePathname } from "next/navigation";

const LangSwitcher = ({ locale }: { locale: string }) => {
  const path = usePathname();
  const handleLocaleChange = (lang: string) => {
    if (path.includes(`/ja`) && lang === "en") {
      window.location.href = path.replace(`/ja`, `/${lang}`);
    } else if (!path.includes(`/ja`)) {
      window.location.href = `/${lang}${path}`;
    }
  };

  return (
    <>
      <button
        onClick={() => handleLocaleChange("en")}
        className={`text-gray hover:text-black transition ${
          locale === "en" && "!text-black"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange("ja")}
        className={`text-gray hover:text-black transition ${
          locale === "ja" && "!text-black"
        }`}
      >
        JA
      </button>
    </>
  );
};

export default LangSwitcher;
