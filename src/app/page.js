import Header from "@/components/Header/Header";
import AmazingTransaction from "@/components/Home/AmazingTransaction";
import HeroSection from "@/components/Home/HeroSection";
import TopCollection from "@/components/Home/TopCollection/TopCollection";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <HeroSection />
      <AmazingTransaction />
      <TopCollection />
    </main>
  );
}
