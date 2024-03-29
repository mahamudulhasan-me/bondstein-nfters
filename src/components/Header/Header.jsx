import { candal } from "@/app/layout";
import Link from "next/link";
import BtnOutline from "../Buttons/BtnOutline";
import BtnPrimary from "../Buttons/BtnPrimary";
import ResponsiveMenu from "./ResponsiveMenu";
import SearchForm from "./SearchForm";
import { navItem } from "./navItem";
const Header = () => {
  return (
    <header className=" border-b md:py-4 py-2">
      <div className="container mx-auto px-[5%] flex flex-center-between">
        <h5
          className={`text-primary-purple font-semibold text-2xl ${candal.className}`}
        >
          NFTERS
        </h5>
        {/* desktop view menu  */}
        <>
          <nav className="md:flex gap-6 hidden">
            {navItem.map((item) => (
              <Link href="" className="text-text-dark " key={item}>
                {item}
              </Link>
            ))}
          </nav>

          <span className="hidden md:block">
            <SearchForm />
          </span>
          <div className="md:flex gap-3 items-center hidden">
            <BtnPrimary title="Upload" />
            <BtnOutline title="Connect Wallet" />
          </div>
        </>
        {/* mobile view menu  */}
        <>
          <ResponsiveMenu />
        </>
      </div>
    </header>
  );
};

export default Header;
