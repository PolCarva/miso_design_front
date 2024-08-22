import React from "react";

const ChangeLocale = ({
  locale,
  isMobile,
}: {
  locale: string;
  isMobile?: boolean;
}) => {
  return isMobile ? (
    <>
      <li className="flex absolute bottom-5 gap-5 md:hidden">
        <button
          className={`${
            locale === "en" ? "text-black" : "text-gray"
          }  p-5 hover:text-black transition`}
        >
          EN
        </button>
        <button
          className={`${
            locale === "ja" ? "text-black" : "text-gray"
          }  p-5 hover:text-black transition`}
        >
          JP
        </button>
      </li>
    </>
  ) : (
    <>
      {" "}
      <button
        className={`${
          locale === "en" ? "text-black" : "text-gray"
        }  p-5 hover:text-black transition`}
      >
        EN
      </button>
      <button
        className={`${
          locale === "ja" ? "text-black" : "text-gray"
        }  p-5 hover:text-black transition`}
      >
        JP
      </button>
    </>
  );
};

export default ChangeLocale;
