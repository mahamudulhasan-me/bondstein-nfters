import { candal } from "@/app/layout";
import Image from "next/image";
const NTFsFeatures = () => {
  return (
    <div className="section-bg px-[5%] py-14">
      <h3 className={`${candal.className} font-semibold text-3xl`}>
        Collection Featured NFTs
      </h3>
      <section className="grid grid-cols-3 gap-10 mt-12">
        <div>
          <div className="flex gap-3">
            <Image src="/images/img-4.svg" width={265} height={272} alt="" />
            <aside className="space-y-3">
              <Image src="/images/group-1.svg" width={103} height={85} alt="" />
              <Image src="/images/group-3.svg" width={103} height={85} alt="" />
              <Image src="/images/group-2.svg" width={103} height={85} alt="" />
            </aside>
          </div>
          <div>
            <h5 className="text-xl font-semibold">Amazing Collection</h5>
            <figure className="flex items-center gap-2">
              <Image
                src="/images/people/people-1.svg"
                width={28}
                height={28}
                alt=""
              />
              by Mahmud
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NTFsFeatures;
