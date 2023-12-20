import { candal } from "@/app/layout";
import Image from "next/image";
import BtnPrimary from "../Buttons/BtnPrimary";

const CreateNFTs = () => {
  return (
    <div className="px-[5%] grid md:grid-cols-2 items-center  gap-20 py-12">
      <>
        <section className="flex justify-between items-center md:gap-8">
          <aside className="flex flex-col justify-end items-end gap-4 md:gap-8 z-20">
            <figure className="relative  w-[210px] h-[210px] md:w-[300px] md:h-[300px]">
              <Image src="/images/img-1.svg" fill alt="" />
              <Image
                src="/images/people/people-1.svg"
                width={80}
                height={80}
                alt=""
                className="absolute -bottom-5 -right-5 ring-4 ring-primary-purple rounded-full"
              />
            </figure>
            <figure className="relative  w-[130px] h-[170px] md:w-[194px] md:h-[214px] ">
              <Image src="/images/img-3.svg" fill alt="" />
              <Image
                src="/images/people/people-3.svg"
                width={80}
                height={80}
                alt=""
                className="absolute -bottom-5 -right-5  rounded-full"
              />
            </figure>
          </aside>
          <figure className="relative w-[170px] h-[200px] md:w-[240px] md:h-[265px] z-10">
            <Image src="/images/img-2.svg" fill alt="" />
            <Image
              src="/images/people/people-2.svg"
              width={80}
              height={80}
              alt=""
              className="absolute -bottom-5 -right-5 rounded-full"
            />
          </figure>
        </section>
      </>
      <section>
        <h3 className={`${candal.className} text-4xl `}>
          Create and sell <br /> your NFTs
        </h3>
        <p className="md:w-4/5 py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <BtnPrimary title="Sign up Now" />
      </section>
    </div>
  );
};

export default CreateNFTs;
