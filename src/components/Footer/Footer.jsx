import { candal } from "@/app/layout";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="grid md:grid-cols-3 gap-12 px-[5%] py-14 container mx-auto">
        <section>
          <h5 className={`uppercase text-2xl ${candal.className}`}>NFters </h5>
          <p className="mt-6 mb-9">
            The world&apos;s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className="flex items-center text-3xl gap-4">
            <FaFacebook color="#3B5998" />
            <FaTwitter color="#55ACEE" />
            <FaLinkedin color="#007AB9" />
            <FaYoutube color="#FF0000" />
          </div>
        </section>
        <section className="flex justify-between">
          <aside>
            <h6 className="text-xl mb-6">Market Place</h6>
            <ul className="text-[#3D3D3D] space-y-2 font-semibold">
              <li>All NFTs</li>
              <li>New</li>
              <li>Art</li>
              <li>Sports</li>
              <li>Utility</li>
              <li>Music</li>
              <li>Domain Name</li>
            </ul>
          </aside>
          <aside>
            <h6 className="text-xl mb-6">My Account</h6>
            <ul className="text-[#3D3D3D] space-y-2 font-semibold">
              <li>Profile</li>
              <li>Favorite</li>
              <li>My Collections</li>
              <li>Settings</li>
            </ul>
          </aside>
        </section>
        <section>
          <h6 className="text-xl mb-6">Stay in the loop</h6>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <form className="ring-2 group hover:ring-primary-purple transition-all duration-300 mt-8 ring-[#F1F1F1] rounded-[45px] flex justify-between items-center w-full p-1">
            <input
              type="email"
              className="h-full w-full outline-none focus:outline-none ml-2"
            />
            <input
              type="submit"
              value="Subscribe Now"
              className="bg-[#2639ED] bg-opacity-70 group-hover:bg-opacity-100 transition-all duration-100 text-white rounded-[45px] py-3 px-4 font-semibold cursor-pointer"
            />
          </form>
        </section>
      </footer>
      <p className="border-t w-full text-center py-4">
        Copyright &copy; 2023 Mahamudul Hasan
      </p>
    </>
  );
};

export default Footer;
