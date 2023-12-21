import { FaEthereum } from "react-icons/fa";

const LiveAuction = () => {
  return (
    <div className="absolute md:bottom-[30%] bottom-[40%] rounded-full md:-left-12 -left-6  w-[101px] h-[101px] bg-[#FFE0D4] uppercase p-1.5 rotate-[30deg]">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FFE0D4"
          id="circlePath"
          d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
        />
        <text>
          <textPath href="#circlePath" className="tracking-wide space">
            • Live Auction • Live Auction
          </textPath>
        </text>
      </svg>
      <FaEthereum className="text-3xl absolute inset-9" />
    </div>
  );
};

export default LiveAuction;
