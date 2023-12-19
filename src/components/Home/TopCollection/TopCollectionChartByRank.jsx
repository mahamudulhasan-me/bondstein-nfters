"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const TopCollectionChartByRank = () => {
  const [topCollection, setTopCollection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/topCollection.json");
        const data = await response.json();
        setTopCollection(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {topCollection.map((item) => (
        <div key={item.rank} className="flex-center-between gap-4 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl">{item?.rank}</h1>
            <figure className="relative">
              <Image src={item?.image} width={60} height={60} alt="" />
              {item?.verified && (
                <RiVerifiedBadgeFill className="absolute -top-2 -right-2 text-[#1E93FF] text-3xl" />
              )}
            </figure>

            <div>
              <p className="text-text-dark font-semibold">{item?.name}</p>
              <p className="flex items-center font-semibold">
                <FaEthereum className="text-text-dark text-2xl" /> {item?.price}
              </p>
            </div>
          </div>
          <h2
            className={`${
              item?.profit ? "text-[#14C8B0]" : "text-[#FF002E]"
            } text-xl`}
          >
            +{item?.increasePercent}%
          </h2>
        </div>
      ))}
    </>
  );
};

export default TopCollectionChartByRank;
