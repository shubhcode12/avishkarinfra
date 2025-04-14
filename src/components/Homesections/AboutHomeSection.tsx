import { Button } from "@/components/ui/button";
import React from "react";
import { Homescreen } from "../../../public/assets/images";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import Link from "next/link";
const AboutHomeSection = () => {
  return (
    <section className="w-full flex py-14 lg:py-24 justify-center px-4 lg:px-10 ">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
            <div className="flex flex-col w-full gap-8">
              <div className="w-full flex justify-start items-center gap-4">
                <div className="">
                  <svg
                    width="60"
                    height="2"
                    viewBox="0 0 60 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line
                      x1="1"
                      y1="1"
                      x2="59"
                      y2="1"
                      stroke="#F58634"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div className="w-full text-primary text-xl font-semibold">
                  WHAT SETS US APART
                </div>
              </div>
              <div className="text-[1.55rem] lg:text-4xl font-semibold text-secondary">
                Discover Premium Residential & Commercial Spaces
              </div>
              <div className="text-lg">
                Established in the year 2005, Avishkar Group in Kalamba Ring
                Road, Kolhapur is a top player in the category Builders &
                Developers in the Kolhapur. Avishkar Infra Established in the
                year 2017 This well-known establishment acts as a one-stop
                destination serving customers both local and from other parts of
                Kolhapur.
              </div>
              <div>
                <Link href="/about">
                  <Button className="flex justify-center gap-2">
                    <span>Our Company</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full ">
              <Image src={Homescreen.home1} className="w-full h-full rounded-3xl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeSection;
