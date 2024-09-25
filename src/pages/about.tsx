import Navbar from "@/components/common/Navbar";
import React from "react";
import { common } from "../../public/assets/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { aboutscreen } from "../../public/assets/images";
import { AppleCardsCarouselDemo } from "@/components/common/Team";
const About = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex flex-col gap-8">

            <div className="flex justify-start w-full rounded-3xl gap-8 bg-[url('../../public/assets/images/about/hero.png')] object-cover">
              <div className="flex flex-col gap-4 px-10 py-4 justify-start items-start my-48 rounded-3xl">
                <div className="flex justify-start">

                <Button className="flex justify-center !w-auto gap-2">
                    <span>About us</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
                </div>
                <div className="text-white font-semibold text-6xl text-start max-w-lg">Expertise & Care in Every Property </div>
              </div>
            </div>
            <div className="flex justify-center">
                <Button className="bg-white text-secondary border-primary border-2 hover:text-white">Why us</Button>
            </div>
            <div className="flex justify-center">

            <div className="flex justify-center text-secondary font-semibold text-3xl max-w-md text-center">Uniquely Combining Local Expertise with Family Values</div>
            </div>
            </div>
          </div>
        </div>
      </section> 
      <section className="w-full flex flex-col bg-secondary rounded-3xl justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
            <div className="w-full flex flex-col gap-4">
                <div>
                    <Button>About Us</Button>
                </div>
                <div className="text-white font-semibold text-3xl">
                About Avishkar Infra
                </div>
                <div className="text-white">
                Avishkar Infra is a distinguished name among real estate builders in Kolhapur, and it is known for spearheading numerous prestigious and iconic projects in the city. Our vision to exceed and our passion to excel drive us to push boundaries and set new standards in the industry. As the leading builders in Kolhapur, we leverage our extensive experience and deep knowledge to develop premium, high-quality real estate projects.
                </div>
                <div className="text-white font-semibold text-3xl">
                Vision & Mission
                </div>
                <div className="text-white">
                To set new benchmarks in the real estate industry by continuously pushing boundaries, delivering innovative, premium-quality projects, and shaping the future skyline of Kolhapur.
                </div>
            </div>
            <div className="w-full">
                <Image src={aboutscreen.aboutHero} alt="" className="h-64"/>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col gap-8">
            <div className="flex justify-start">
                <Button className="bg-white text-secondary border-primary border-2 hover:text-white">Our Team</Button>
            </div>
            <div className="text-start text-secondary font-semibold text-3xl">
            Who drives the Avishkar
            </div>
            </div>
          </div>
        </div>
      </section>
            <div><AppleCardsCarouselDemo/></div>
    </div>
  );
};

export default About;
