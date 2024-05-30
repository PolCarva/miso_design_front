import { STABLES } from "@/stables";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

interface SocialMedia {
  _id: string;
  platform: "twitter" | "linkedin" | "behance" | "instagram" | "youtube";
  url: string;
}

const getIconByPlatform = (platform: string) => {
  switch (platform) {
    case "twitter":
      return <FaXTwitter className="text-2xl" />;
    case "linkedin":
      return <FaLinkedin className="text-2xl" />;
    case "behance":
      return <FaBehance className="text-2xl" />;
    case "instagram":
      return <FaInstagram className="text-2xl" />;
    case "youtube":
      return <FaYoutube className="text-2xl" />;
    default:
      return null;
  }
};

const Footer = async () => {
  const data = await fetch(
    `${STABLES.API_URL}/config/66492e49eb38e1a64a281be9?locale=undefined&draft=false&depth=1`
  );
  const info = await data.json();
  revalidatePath("/");
  return (
    <footer className="mt-5 py-5 text-black w-full flex justify-center items-center gap-5">
      {info?.socialMedia?.map((social: SocialMedia) => (
        <Link
          className="text-gray hover:text-dark-gray transition"
          href={social.url}
          target="_blank"
          key={social.platform}
        >
          {getIconByPlatform(social.platform)}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
