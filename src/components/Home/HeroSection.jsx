import { candal } from "@/app/layout";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import BtnPrimary from "../Buttons/BtnPrimary";
import Counter from "../Counter/Counter";
const HeroSection = () => {
  return (
    <div className="px-[5%] grid md:grid-cols-2 justify-center items-center py-20 gap-20 ">
      <section>
        <h1
          className={`font-semibold text-[40px] uppercase font-candal ${candal.className}`}
        >
          Discover, and collect Digital Art NFTs{" "}
        </h1>
        <p className="text-text-light text-lg mt-4 mb-14">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <BtnPrimary title="Explore Now" />
        <section className="flex items-center gap-6 mt-8">
          <Counter title="Artwork" number="98" />
          <Counter title="Auction" number="12" />
          <Counter title="Artist" number="15" />
        </section>
      </section>
      <section className="hidden md:block md:relative h-full -bottom-50 -top-5 left-0">
        <>
          <div className="md:absolute md:right-0 md:top-12 w-[310px] h-[341px] z-10 bg-red-50 rounded-3xl">
            <Image src="/images/img-3.svg" alt="Hero Image" fill /> 1
          </div>
          <div className="md:absolute md:right-10 md:top-6 w-[356px] h-[391px]  z-20 rounded-3xl ">
            <Image src="/images/img-2.svg" alt="Hero Image" fill />
          </div>
          <div className="md:absolute relative md:right-20 w-[400px] h-[440px] rounded-3xl z-30 ">
            <Image src="/images/img-1.svg" alt="Hero Image" fill />
            <div className="absolute bottom-6 inset-x-6 current_bid-overly px-7 py-4 text-white flex-center-between">
              <div className="space-y-1 ">
                <p className="text-xs text-white">Current Bid</p>
                <p className=" flex items-center gap-1 text-white">
                  <FaEthereum size={20} /> 0.25 ETH
                </p>
              </div>
              <div className="space-y-1 ">
                <p className="text-xs text-white">Ends in</p>
                <p className=" flex items-center gap-1 text-white">
                  12h 43m 42s
                </p>
              </div>
            </div>
          </div>
        </>
      </section>
      <section className="relative md:hidden">
        <Image
          src="/images/img-3.svg"
          alt="Hero Image"
          width={220}
          height={250}
          className="absolute right-0 -top-10 z-10"
        />
        <Image
          src="/images/img-2.svg"
          alt="Hero Image"
          width={280}
          height={360}
          className="absolute right-5 -inset-y-5 z-20"
        />

        <div className="absolute  right-10 -inset-y-10  w-[300px] h-[400px] rounded-3xl z-30 ">
          <Image src="/images/img-1.svg" alt="Hero Image" fill />
          <div className="absolute bottom-12 inset-x-6 current_bid-overly px-7 py-4 text-white flex-center-between">
            <div className="space-y-1 ">
              <p className="text-xs text-white">Current Bid</p>
              <p className=" flex items-center gap-1 text-white">
                <FaEthereum size={20} /> 0.25 ETH
              </p>
            </div>
            <div className="space-y-1 ">
              <p className="text-xs text-white">Ends in</p>
              <p className=" flex items-center gap-1 text-white">12h 43m 42s</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
