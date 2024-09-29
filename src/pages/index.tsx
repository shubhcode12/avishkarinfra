import Navbar from "@/components/common/Navbar";
import { ReviewsSection } from "@/components/common/Reviews";

import Footer from "@/components/common/Footer";
import HeroWithOceanVideo from "@/components/common/HeroVideo";
import AboutHomeSection from "@/components/Homesections/AboutHomeSection";
import ContactSection from "@/components/Homesections/ContactSection";
import ExperienceSection from "@/components/Homesections/ExperienceSection";
import Homefinal from "@/components/Homesections/Homefinal";
import KeyPointsSection from "@/components/Homesections/KeyPointsSection";
import RecentProjectSection from "@/components/Homesections/RecentProjectSection";
import PropertiesSection from "@/components/Homesections/PropertiesSection";
import BlogSection from "@/components/Homesections/BlogSection";
import FaqSection from "@/components/Homesections/FaqSection";
import CTA from "@/components/common/CTA";

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
      <BlogSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <Homefinal />
      <CTA />
      <Footer />
    </div>
  );
}
