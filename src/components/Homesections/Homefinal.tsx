import React from "react";
import { Button } from "../ui/button";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import { AnimatedText } from "../animations/Animatetext";

const Homefinal = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center">
      <div className="flex justify-center w-full ">
        <div className="px-8 w-full  ">
          <div className="flex justify-center w-full rounded-3xl gap-8 bg-[url('../../public/assets/images/home/ctahome.jpeg')] bg-cover lg:bg-cover bg-no-repeat">
            <div className="flex flex-col gap-4 py-8 px-10 my-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl">
            <div className="text-secondary font-semibold text-[1.2rem] lg:text-[1.49rem] text-center lg:max-w-md">
                <AnimatedText>

                Unlock Your Sustainable Living Ready to find your eco-friendly
                home?
                </AnimatedText>
                   </div>
              <div className="text-white text-center max-w-lg">
                <p className="text-center">
                  Explore our collection of sustainable homes and find the one
                  that&apos;s right for you.
                </p>
              </div>
              <div className="flex justify-center">
                <Button className="flex justify-center !w-auto gap-2">
                  <span>Browse Properties</span>
                  <span>
                    <Image src={common.arrowCrossRight} alt="" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homefinal;
