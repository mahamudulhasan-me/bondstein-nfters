import { candal } from "@/app/layout";
import Image from "next/image";

const featuresImage = [
  {
    main: "/images/img-4.svg",
    group: [
      "/images/group-1.svg",
      "/images/group-2.svg",
      "/images/group-3.svg",
    ],
  },
  {
    main: "/images/img-3.svg",
    group: [
      "/images/group-3.svg",
      "/images/group-1.svg",
      "/images/group-2.svg",
    ],
  },
  {
    main: "/images/img-4.svg",
    group: [
      "/images/group-3.svg",
      "/images/group-1.svg",
      "/images/group-2.svg",
    ],
  },
];
const NTFsFeatures = () => {
  return (
    <div className="section-bg px-[5%] py-14">
      <h3 className={`${candal.className} font-semibold text-3xl`}>
        Collection Featured NFTs
      </h3>
      <div className="grid md:grid-cols-3 items-center gap-10 mt-14">
        {/* map features image  */}
        {featuresImage.map((item, index) => (
          <section key={index}>
            <div className="flex gap-2">
              <Image src={item.main} width={265} height={272} alt="" />
              <aside className="flex flex-col justify-between gap-2 ">
                {item.group.map((img, index) => (
                  <Image key={index} src={img} width={103} height={85} alt="" />
                ))}
              </aside>
            </div>
            <div className="flex justify-between items-end mt-7">
              <aside>
                <h5 className="text-xl font-semibold">Amazing Collection</h5>
                <figure className="flex items-center gap-2 mt-2">
                  <Image
                    src="/images/people/people-1.svg"
                    width={28}
                    height={28}
                    alt=""
                  />
                  by Mahmud
                </figure>
              </aside>
              <button className="text-[#2639ED]  border-[#2639ED] rounded-[60px] text-sm px-3 py-2 border-2 hover:bg-[#2639ED] hover:text-white transition-all duration-300 font-semibold">
                Total 54 Items
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default NTFsFeatures;
