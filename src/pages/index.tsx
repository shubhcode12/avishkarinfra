import Navbar from "@/components/common/Navbar";
import { AppleCardsCarouselDemo } from "@/components/common/Reviews";

import Footer from "@/components/common/Footer";
import HeroWithOceanVideo from "@/components/common/HeroVideo";
import AboutHomeSection from "@/components/Homesections/AboutHomeSection";
import ContactSection from "@/components/Homesections/ContactSection";
import ExperienceSection from "@/components/Homesections/ExperienceSection";
import Homefinal from "@/components/Homesections/Homefinal";
import KeyPointsSection from "@/components/Homesections/KeyPointsSection";
import RecentProjectSection from "@/components/Homesections/RecentProjectSection";
import PropertiesSection from "@/components/Homesections/PropertiesSection";
import Section7 from "@/components/Homesections/Section7";
import Section8 from "@/components/Homesections/Section8";

export default function Home() {
  return (
    <div className="">
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <HeroWithOceanVideo />
      <AboutHomeSection />
      <ExperienceSection />
      <KeyPointsSection />
      <RecentProjectSection />
      <PropertiesSection />
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
