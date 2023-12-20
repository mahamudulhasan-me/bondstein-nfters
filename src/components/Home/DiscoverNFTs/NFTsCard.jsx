import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
const NFTsCard = ({ name, image }) => {
  return (
    <div className="bg-white border rounded-xl p-2.5">
      <figure className="relative">
        <Image src={image} width={247} height={222} alt="" className="w-full" />
        <div className="absolute -bottom-3 left-3 flex -space-x-3">
          <Image
            src="/images/people/people-3.svg"
            width={30}
            height={30}
            alt=""
          />
          <Image
            src="/images/people/people-4.svg"
            width={30}
            height={30}
            alt=""
          />
          <Image
            src="/images/people/people-5.svg"
            width={30}
            height={30}
            alt=""
          />
          <Image
            src="/images/people/people-6.svg"
            width={30}
            height={30}
            alt=""
          />
        </div>
      </figure>
      <div className="border-b py-5 mx-3">
        <h6 className="text-xl">{name}</h6>
        <p className="flex-center-between font-semibold">
          <span className="text-primary-green flex items-center gap-1 text-xs ">
            <FaEthereum size={18} /> 0.25 ETH
          </span>
          <span>1 of 321</span>
        </p>
      </div>
      <div className="flex justify-between items-center mx-3 mt-3">
        <h6 className="bg-[#f5f5f5] text-[#5539A8] text-sm px-3 py-2 rounded-full">
          3h 50m 2s left
        </h6>
        <h6 className="text-primary-purple">Place a bid</h6>
      </div>
    </div>
  );
};

export default NFTsCard;
