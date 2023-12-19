import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
const BidCard = ({ src }) => {
  return (
    <div className="flex gap-5">
      <Image src={src} width={147} height={147} alt="" />
      <div className="space-y-2">
        <h5 className="text-xl">The Futr Abstr</h5>
        <div className="flex items-center gap-2">
          <Image
            src="/images/people/people-1.svg"
            width={48}
            height={48}
            alt=""
          />
          <span className="p-2 border border-primary-green text-primary-green rounded-lg text-xs font-semibold flex items-center gap-1">
            <FaEthereum />
            0.25 ETH
          </span>
          <p>1 of 8</p>
        </div>
        <button className="border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white transition-all duration-300  font-semibold px-4 py-2 rounded-[40px]">
          Place a bid
        </button>
      </div>
    </div>
  );
};

export default BidCard;
