import React from "react";
import { Button } from "../ui/button";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "../animations/Animatetext";

const Homefinal = () => {
  return (
    <section
      className="w-full flex pt-12 pb-24 justify-center"
      id="contact-section">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex justify-center w-full rounded-3xl gap-8 bg-[url('../../public/assets/images/home/ctahome.jpeg')] bg-cover lg:bg-cover bg-no-repeat">
            <div className="flex flex-col gap-4 py-10 px-10 my-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl">
              <h2 className="text-white text-center font-semibold text-[1.2rem] lg:text-[1.5rem] lg:max-w-md">
                Find Your Dream Property Today
              </h2>
              <div className="text-white text-center max-w-lg">
                <p className="text-center font-medium">
                  From premium residential plots to commercial spaces and
                  ready-to-move flats, Avishkar Infra offers the best investment
                  opportunities in Kolhapur region.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
                <Link href="/projects">
                  <Button className="flex justify-center !w-auto gap-2 bg-[#ef7f1a] hover:bg-[#d97316]">
                    <span>Browse Properties</span>
                    <span>
                      <Image
                        src={common.arrowCrossRight}
                        alt="Browse properties arrow"
                      />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="flex justify-center !w-auto gap-2 bg-white text-[#ef7f1a] border-[#ef7f1a] hover:bg-[#ef7f1a] hover:text-white">
                    <span>Contact Us</span>
                  </Button>
                </Link>
              </div>
              <div className="text-white text-center text-sm mt-2">
                <p>
                  RERA Registered | Trusted by 500+ Happy Families | Premium
                  Locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homefinal;
