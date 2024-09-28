import Navbar from "@/components/common/Navbar";
import { AppleCardsCarouselDemo } from "@/components/common/Reviews";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useState } from "react";

import Footer from "@/components/common/Footer";
import HeroWithOceanVideo from "@/components/common/HeroVideo";
import ContactSection from "@/components/Homesections/ContactSection";
import Homefinal from "@/components/Homesections/Homefinal";
import KeyPointsSection from "@/components/Homesections/KeyPointsSection";
import AboutHomeSection from "@/components/Homesections/AboutHomeSection";
import Section2 from "@/components/Homesections/Section2";
import Section3 from "@/components/Homesections/Section3";
import Section5 from "@/components/Homesections/Section5";
import Section6 from "@/components/Homesections/Section6";
import Section7 from "@/components/Homesections/Section7";
import Section8 from "@/components/Homesections/Section8";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export default function Home() {
  const [propertyType, setpropertyType] = useState("New to market");
  return (
    <div className="">
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <HeroWithOceanVideo />
      <AboutHomeSection />
      <Section2 />
      <Section3 />
      <KeyPointsSection />
      <Section5 />
      <Section6 />
      <Section7 />
      <section className="bg-[url('../../public/assets/images/home/reviewBg.png')] lg:bg-cover bg-contain bg-no-repeat">
        <AppleCardsCarouselDemo />
      </section>
      <Section8 />
      <ContactSection />
      <Homefinal />

      <Footer />
    </div>
  );
}
