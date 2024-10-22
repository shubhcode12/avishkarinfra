import React from "react";
import Image from "next/image";
import { common } from "../../../public/assets/icon";
import { AnimatedText } from "../animations/Animatetext";
import { MotionCounter } from "../animations/Counter";
const ExperienceSection = () => {
  const stats = [
    { value: "10", label: "Awards Gained" },
    { value: "20", label: "Years of Experience" },
    { value: "598", label: "Rented Home Stay" },
  ];
  return (
    <section className="w-full pt-24 justify-center px-0 lg:px-10">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full border-b pb-12">
          <div className="flex justify-center w-full">
            <div className="flex flex-col w-full gap-8">
              <div className="text-[1.5rem] lg:text-6xl font-semibold text-secondary uppercase lg:leading-[4rem] text-transparent bg-gradient-to-r from-secondary to-gray-300 inline-block bg-clip-text">
                <AnimatedText>
                  We've found luxury homes for clients for a decade.
                </AnimatedText>
              </div>
              <div className="text-lg text-md">
                We take great pride in ensuring the satisfaction of our
                customers, which is why we guarantee that the products we sell
                will bring happiness to each and every customer. Our genuine
                care for customer satisfaction is what sets us apart.
              </div>
            </div>
            <div className="w-auto lg:w-2/3"></div>
          </div>
        </div>
      </div>

      <section className="w-full flex pt-12 pb-24 justify-start px-10 lg:px-10">
        <div className="w-full max-w-screen-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-4 items-start">
                <div className="flex items-end gap-2">
                  <div className="text-7xl">
                    <MotionCounter value={parseInt(stat?.value)} />
                  </div>
                  <Image src={common.plus} alt="" />
                </div>
                <div className="text-secondaryLight text-lg font-semibold text-opacity-50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExperienceSection;
