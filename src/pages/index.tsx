import Image from "next/image";
import localFont from "next/font/local";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/Navbar";
import styles from "./page.module.css";
import Navbar2 from "@/components/common/Header";
import { Homescreen } from "../../public/assets/images";
import { common } from "../../public/assets/icon";
import { useState } from "react";
import CardDemo from "@/components/blocks/cards-demo-2";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BentoGrid as BentoGrid2,
  BentoGridItem as BentoGridItem2,
} from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconClockFilled,
  IconFileBroken,
  IconLocationFilled,
  IconMapPinFilled,
  IconPhoneFilled,
  IconSend,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { AppleCardsCarouselDemo } from "@/components/common/Reviews";


import Footer from "@/components/common/Footer";
import { CardHoverEffectDemo } from "@/components/common/Goal";
import HeroWithOceanVideo from "@/components/common/HeroVideo";
import Section1 from "@/components/Homesections/Section1";
import Section2 from "@/components/Homesections/Section2";
import Section3 from "@/components/Homesections/Section3";
import KeyPointsSection from "@/components/Homesections/KeyPointsSection";
import Section5 from "@/components/Homesections/Section5";
import Section6 from "@/components/Homesections/Section6";
import Section7 from "@/components/Homesections/Section7";
import Section8 from "@/components/Homesections/Section8";
import ContactSection from "@/components/Homesections/ContactSection";
import Homefinal from "@/components/Homesections/Homefinal";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);



const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


export default function Home() {
  const [propertyType, setpropertyType] = useState("New to market");
  return (
    <div className="">
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <HeroWithOceanVideo/>
      <Section1/>
      <Section2/>
      <Section3/>
      <KeyPointsSection/>
      <Section5/>
      <Section6/>
      <Section7/>
      <section className="bg-[url('../../public/assets/images/home/reviewBg.png')] lg:bg-cover bg-contain bg-no-repeat">
        <AppleCardsCarouselDemo />
      </section>
      <Section8/>
      <ContactSection/>
      <Homefinal/>
      
      
    
      
      
      
   <Footer/>
    </div>
  );
}
