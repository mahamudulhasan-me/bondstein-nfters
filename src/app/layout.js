import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Candal, DM_Sans } from "next/font/google";
import "./globals.css";

export const candal = Candal({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-candal",
});
const dm_sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Bondstein NFTers",
  description: "Bondstein Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${candal.className} ${dm_sans.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
