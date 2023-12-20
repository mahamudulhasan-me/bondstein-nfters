import { candal } from "@/app/layout";
import BtnOutline from "../Buttons/BtnOutline";
import BtnPrimary from "../Buttons/BtnPrimary";
import ResponsiveMenu from "./ResponsiveMenu";
import SearchForm from "./SearchForm";
import { navItem } from "./navItem";
const Header = () => {
  return (
    <header className="px-[5%] flex flex-center-between border-b md:py-4 py-2">
      <h5
        className={`text-primary-purple font-semibold text-2xl ${candal.className}`}
      >
        NFTERS
      </h5>
      {/* desktop view menu  */}
      <>
        <nav>
          <ul className="md:flex gap-6 hidden">
            {navItem.map((item) => (
              <li className="text-text-dark" key={item}>
                {item}
              </li>
            ))}
          </ul>
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
    </header>
  );
};

export default Header;
