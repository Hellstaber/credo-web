import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import { RcheuliHero, RcheuliProducts, Offers } from "@/components/Rcheuli/Rcheuli";
import MobileBank from "@/components/MobileBank/MobileBank";
import Calculator from "@/components/Calculator/Calculator";
import Rates from "@/components/Rates/Rates";
import Locations from "@/components/Locations/Locations";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "კრედო რჩეული — კრედო ბანკი",
  description: "გახდი რჩეული და ისარგებლე პრივილეგირებული სერვისებითა და მომსახურებით.",
};

// The რჩეული page is designed in Figma's dark variable mode (1013:1844)
export default function RcheuliPage() {
  return (
    <div data-theme="dark">
      <Header />
      <main>
        <RcheuliHero />
        <RcheuliProducts />
        <MobileBank />
        <Offers />
        <Calculator />
        <Rates />
        <Locations title="რჩეული ფილიალები" />
      </main>
      <Footer />
    </div>
  );
}
