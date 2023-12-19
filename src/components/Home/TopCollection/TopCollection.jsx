import { candal } from "@/app/layout";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import BidCard from "./BidCard";
import TopCollectionChartByRank from "./TopCollectionChartByRank";
const TopCollection = () => {
  return (
    <div className="px-[5%] py-28 grid grid-cols-12 gap-6">
      <section className="col-span-8 flex justify-between gap-10">
        <div className="w-1/2 ">
          <Image src="/images/img-4.svg" width={400} height={424} alt="" />
          <div className="flex-center-between py-8">
            <aside className="flex items-center gap-2">
              <Image
                src="/images/people/people-1.svg"
                width={48}
                height={48}
                alt=""
              />{" "}
              <div>
                <h6 className="text-xl">The Futr Abstr</h6>
                <p>10 in the stock</p>
              </div>
            </aside>
            <div className="space-y-1">
              <p className="font-semibold text-xs">Current Bid</p>
              <h6 className=" flex items-center gap-1 text-lg">
                <FaEthereum size={20} /> 0.25 ETH
              </h6>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-5">
          <BidCard src={"/images/group-1.svg"} />
          <BidCard src={"/images/group-2.svg"} />
          <BidCard src={"/images/group-3.svg"} />
        </div>
      </section>
      <section className="col-span-4 border-l pl-5">
        <h4 className={`font-semibold text-2xl ${candal.className}`}>
          Top Collections over
        </h4>
        <h6 className="text-primary-purple text-lg">Last 7 days</h6>
        <div className="divide-y">
          <TopCollectionChartByRank />
        </div>
      </section>
    </div>
  );
};

export default TopCollection;
