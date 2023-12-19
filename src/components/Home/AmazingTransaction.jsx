import { candal } from "@/app/layout";
import { FaRegChartBar } from "react-icons/fa";
import { TbTransferIn } from "react-icons/tb";
const AmazingTransaction = () => {
  return (
    <div className="section-bg grid grid-cols-3 gap-10 py-20 px-[5%]">
      <h3 className={`${candal.className} text-3xl text-text-dark`}>
        The amazing NFT art of the world here
      </h3>

      <section className="flex gap-2 items-start">
        <TbTransferIn className="text-text-dark text-7xl -mt-4" />
        <aside>
          <h6 className="text-text-dark font-semibold text-lg">
            Fast Transaction
          </h6>
          <p className="text-text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus imperdiet.
          </p>
        </aside>
      </section>
      <section className="flex gap-2 items-start">
        <FaRegChartBar className="text-text-dark text-6xl  -mt-3" />
        <aside>
          <h6 className="text-text-dark font-semibold text-lg">
            Growth Transaction
          </h6>
          <p className="text-text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus
          </p>
        </aside>
      </section>
    </div>
  );
};

export default AmazingTransaction;
