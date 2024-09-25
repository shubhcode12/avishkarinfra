"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { aboutscreen } from "../../../public/assets/images";
 
const content = [
  {
    title: "About Avishkar Infra",
    description:
      "Avishkar Infra is a distinguished name among real estate builders in Kolhapur, and it is known for spearheading numerous prestigious and iconic projects in the city. Our vision to exceed and our passion to excel drive us to push boundaries and set new standards in the industry. As the leading builders in Kolhapur, we leverage our extensive experience and deep knowledge to develop premium, high-quality real estate projects.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <div className="w-full">
                <Image src={aboutscreen.aboutHero} alt="" className="h-full"/>
            </div>
      </div>
    ),
  },
  {
    title: "Vision & Mission",
    description:
      "To set new benchmarks in the real estate industry by continuously pushing boundaries, delivering innovative, premium-quality projects, and shaping the future skyline of Kolhapur.",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <div className="w-full">
                <Image src={aboutscreen.aboutHero} alt="" className="h-full"/>
            </div>
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}