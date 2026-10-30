import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import { EmigrantsHero, EmigrantOffers, EmigrantProducts } from "@/components/Emigrants/Emigrants";
import MobileBank from "@/components/MobileBank/MobileBank";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "კრედო ემიგრანტებისთვის — კრედო ბანკი",
  description: "საბანკო მომსახურება ემიგრანტებისთვის: ანაბრები, სესხები, გზავნილები და ვიდეობანკინგი.",
};

export default function EmigrantsPage() {
  return (
    <>
      <Header />
      <main>
        <EmigrantsHero />
        <EmigrantOffers />
        <MobileBank phoneImage="/images/emigrants/mobile-phone.png" movingLetters />
        <EmigrantProducts />
      </main>
      <Footer />
    </>
  );
}
