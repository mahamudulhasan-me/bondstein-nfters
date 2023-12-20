import { candal } from "@/app/layout";
import BtnOutline from "@/components/Buttons/BtnOutline";
import { IoFilter } from "react-icons/io5";
import NFTsCard from "./NFTsCard";
const categories = [
  "All Categories",
  "Art",
  "Collectibles",
  "Sports",
  "Music",
  "Gaming",
  "Crypto",
];
const NFTs = [
  { name: "ArtCrypto", image: "/images/img-1.svg" },
  { name: "ArtCrypto", image: "/images/img-2.svg" },
  { name: "ArtCrypto", image: "/images/img-3.svg" },
  { name: "ArtCrypto", image: "/images/img-4.svg" },
  { name: "ArtCrypto", image: "/images/img-3.svg" },
  { name: "ArtCrypto", image: "/images/img-4.svg" },
  { name: "ArtCrypto", image: "/images/img-1.svg" },
  { name: "ArtCrypto", image: "/images/img-2.svg" },
];
const DiscoverNFTs = () => {
  return (
    <div className="px-[5%] section-bg py-12">
      <h3 className={`${candal.className}  text-4xl`}>Discover more NFTs</h3>
      <section className="flex-center-between flex-wrap mt-8">
        <ul className="flex items-center flex-wrap gap-4 mb:mb-0 mb-4">
          {categories.map((item, index) => (
            <li
              className="bg-[#DCDCDC] bg-opacity-50 px-5 py-2.5 rounded-[60px] hover:bg-primary-purple hover:text-white transition-all duration-300 cursor-pointer font-semibold"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="flex gap-2 items-center text-primary-purple bg-[#DCDCDC] bg-opacity-50 px-5 py-2.5 rounded-[60px] hover:bg-primary-purple hover:text-white transition-all duration-300 cursor-pointer font-semibold">
          <IoFilter size={30} /> All Filters
        </button>
      </section>
      <section className="grid md:grid-cols-4 gap-8 mt-10">
        {NFTs.map((item, index) => (
          <NFTsCard key={index} name={item.name} image={item.image} />
        ))}
      </section>
      <div className="w-fit mx-auto mt-8">
        <BtnOutline title="More NFTs" />
      </div>
    </div>
  );
};

export default DiscoverNFTs;
