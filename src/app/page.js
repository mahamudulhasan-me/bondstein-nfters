import AmazingTransaction from "@/components/Home/AmazingTransaction";
import CreateNFTs from "@/components/Home/CreateNFTs";
import DiscoverNFTs from "@/components/Home/DiscoverNFTs/DiscoverNFTs";
import HeroSection from "@/components/Home/HeroSection";
import NTFsFeatures from "@/components/Home/NTFsFeatures/NTFsFeatures";
import TopCollection from "@/components/Home/TopCollection/TopCollection";

export default function Home() {
  return (
    <main>
      {/* all home page component here  */}
      <HeroSection />
      <AmazingTransaction />
      <TopCollection />
      <NTFsFeatures />
      <CreateNFTs />
      <DiscoverNFTs />
    </main>
  );
}
