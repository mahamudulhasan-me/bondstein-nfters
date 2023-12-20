"use client";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import BtnOutline from "../Buttons/BtnOutline";
import BtnPrimary from "../Buttons/BtnPrimary";
import SearchForm from "./SearchForm";
import { navItem } from "./navItem";
const ResponsiveMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="bg-gray-200 rounded-lg text-primary-purple p-2 text-3xl md:hidden"
      >
        {isMenuOpen ? <IoCloseSharp /> : <IoMenu />}
      </button>

      <div
        className={`absolute duration-300 transition-all top-16 section-bg z-50 flex-center gap-4 p-5 flex-col  text-center overflow-hidden  ${
          isMenuOpen ? " right-0 left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col font-semibold text-text-light space-y-4">
          {navItem.map((item, index) => (
            <Link key={index} href={"/"}>
              {item}
            </Link>
          ))}
        </div>
        <BtnPrimary title="Upload" />
        <BtnOutline title="Connect Wallet" />
        <SearchForm />
      </div>
    </>
  );
};

export default ResponsiveMenu;
