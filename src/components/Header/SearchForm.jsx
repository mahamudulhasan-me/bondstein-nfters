import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchForm = () => {
  return (
    <form className="relative">
      <input
        type="text"
        className="border rounded-3xl px-6 py-2 focus:outline-none hover:border-primary-purple transition-all duration-150"
        placeholder="Search"
      />
      <HiMiniMagnifyingGlass className="text-text-gray text-2xl absolute right-3 top-2" />
    </form>
  );
};

export default SearchForm;
