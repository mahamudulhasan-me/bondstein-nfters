import { candal } from "@/app/layout";
import Image from "next/image";
import BtnPrimary from "../Buttons/BtnPrimary";

const CreateNFTs = () => {
  return (
    <div className="px-[5%] grid grid-cols-2 mb-72  gap-20 py-12">
      <>
        <section className="relative h-full inset-0">
          <figure className="absolute top-0 left-0 w-[300px] h-[300px]">
            <Image src="/images/img-1.svg" fill alt="" />
            <Image
              src="/images/people/people-1.svg"
              width={80}
              height={80}
              alt=""
              className="absolute -bottom-5 -right-5 ring-4 ring-primary-purple rounded-full"
            />
          </figure>
          <figure className="absolute inset-y-[50%] -right-10 w-[240px] h-[265px]">
            <Image src="/images/img-2.svg" fill alt="" />
            <Image
              src="/images/people/people-2.svg"
              width={80}
              height={80}
              alt=""
              className="absolute -bottom-5 -right-5 rounded-full"
            />
          </figure>
          <figure className="absolute left-[15%] top-[110%] w-[194px] h-[214px]">
            <Image src="/images/img-3.svg" fill alt="" />
            <Image
              src="/images/people/people-3.svg"
              width={80}
              height={80}
              alt=""
              className="absolute -bottom-5 -right-5  rounded-full"
            />
          </figure>
        </section>
      </>
      <section className="h-full relative inset-y-1/2">
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
