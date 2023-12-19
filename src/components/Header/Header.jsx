import { candal } from "@/app/layout";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import BtnOutline from "../Buttons/BtnOutline";
import BtnPrimary from "../Buttons/BtnPrimary";
const navItem = ["Marketplace", "Resource", "About"];

const Header = () => {
  return (
    <header className="px-[5%] flex flex-center-between border-b py-4">
      <h5
        className={`text-primary-purple font-semibold text-2xl ${candal.className}`}
      >
        NFTERS
      </h5>
      <nav>
        <ul className="flex gap-6">
          {navItem.map((item) => (
            <li className="text-text-dark" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <form className="relative">
        <input
          type="text"
          className="border rounded-3xl px-6 py-2 focus:outline-none hover:border-primary-purple transition-all duration-150"
          placeholder="Search"
        />
        <HiMiniMagnifyingGlass className="text-text-gray text-2xl absolute right-3 top-2" />
      </form>
      <div className="flex gap-3 items-center">
        <BtnPrimary title="Upload" />
        <BtnOutline title="Connect Wallet" />
      </div>
    </header>
  );
};

export default Header;
