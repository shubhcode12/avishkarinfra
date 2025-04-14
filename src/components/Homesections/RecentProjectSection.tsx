import React, { useEffect, useState } from "react";
import { Homescreen } from "../../../public/assets/images";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import { AnimatedText } from "../animations/Animatetext";
const RecentProjectSection = () => {
  return (
    <section className="w-full flex py-24 justify-center px-4 lg:px-10">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full ">
          <div className="flex flex-col w-full gap-8">
            <div className="text-center text-4xl font-semibold text-secondary">
              Our Recent Projects
            </div>

            <div className="w-full flex justify-center">
              <div className="w-full lg:w-1/2 text-lg text-center">
                The agency&apos;s mission is to provide clients with a selection
                of properties that meet high environmental standards, while also
                providing a comfortable and luxurious lifestyle.
              </div>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full flex flex-col gap-8">
                  <div className="rounded-[2.8rem]">
                    <Image
                      src={Homescreen.lobby}
                      className="h-72 rounded-[2.8rem] object-cover"
                      alt=""
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-primary text-white rounded-[2.8rem] flex flex-col gap-4 p-8">
                      <div className="font-semibold text-4xl">
                        20 + Projects
                      </div>
                      <div>
                        Explore our wide variety of properties to fid your dream
                        home today
                      </div>
                    </div>
                    <div>
                      <Image
                        src={Homescreen.gate}
                        className="h-72 rounded-[2.8rem] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-[2.8rem]">
                  <div className=" w-full rounded-[2.8rem] group/card h-full">
                    <div
                      className={
                        " cursor-pointer overflow-hidden relative card h-full rounded-[2.8rem] w-full backgroundImage flex flex-col justify-between p-4 bg-[url('../../public/assets/images/birdeye.jpg')] bg-cover "
                      }>
                      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black rounded-[2.8rem] opacity-60"></div>
                      <div></div>
                      <div className="text content pl-6 pb-4">
                        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative z-10">
                          Padma Veera City
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
                          Jaysingpur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectSection;
