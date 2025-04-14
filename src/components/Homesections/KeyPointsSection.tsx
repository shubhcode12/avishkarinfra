import React from "react";
import { CardHoverEffectDemo } from "../common/Goal";
import { Button } from "../ui/button";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import Link from "next/link";
import { AnimatedText } from "../animations/Animatetext";
const KeyPointsSection = () => {
   const projects = [
    {
      title: "Modern, Eco-Friendly Homes",
      description:
        "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
      link: "#",
    },
    {
      title: "Prime City Locations",
      description:
        "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
      link: "#",
    },
    {
      title: "Community-Focused Living",
      description:
        "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
      link: "#",
    },
    {
      title: "Sustainable Architecture",
      description:
        "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
      link: "#",
    },
  ];

  return (
    <div className="mx-2">
      <section className="w-full flex py-24 justify-center px-4 lg:px-8 bg-secondary rounded-3xl hero-banner">
        <div className="flex justify-center w-full">
          <div className="px-4 w-full ">
            <div className="flex flex-col gap-8 lg:flex-row justify-center lg:justify-between  items-end w-full">
            <div className="text-white font-semibold text-[2.4rem] lg:text-5xl max-w-3xl">            
                Building Excellence, Creating Landmarks, Transforming Lives          
              </div>
              <div className="flex justify-start w-full lg:w-auto">
              <Link href="/projects">            
                <Button className="flex justify-center w-auto gap-2">
                  <span>View All Properties</span>
                  <span>
                    <Image src={common.arrowCrossRight} alt="" />
                  </span>
                </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-16">
            <div className="w-full">
             <HoverEffect items={projects} />
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyPointsSection;
