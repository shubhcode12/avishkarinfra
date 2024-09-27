import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { StickyScrollRevealDemo } from "@/components/common/Sticky";
import { Button } from "@/components/ui/button";
import React from "react";
import { common } from "../../public/assets/icon";
import Image from "next/image";
import { Input } from "@/components/ui/input";
const services = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full flex pt-12 h-[50rem] justify-center px-4 lg:px-0 bg-[url('../../public/assets/images/about/hero.png')] object-cover">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex flex-col gap-8">
              <div className="h-[20rem]"></div>
              <div className="text-6xl flex-1 font-semibold text-white">
                Our work
              </div>
              <div className="w-full bg-white h-[0.5px]"></div>
              <div className="text-white max-w-4xl text-3xl">
                Future focused, we put people at the centre of our work to
                deliver next generation residential and mixed use schemes that
                create long-lasting positive impact.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex py-32 justify-center px-4 lg:px-0 ">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex flex-col gap-8">
              <div className="text-secondary max-w-4xl text-xl">
                We develop transformative, high-quality residential projects,
                ranging from community-focused developments to modern,
                sustainable living spaces in the heart of Kolhapur. Our approach
                prioritizes building strong relationships with the community
                before we build structures, ensuring that our projects
                positively impact the city while minimizing our environmental
                footprint.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col bg-secondary rounded-3xl justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div>
              <Button>About Us</Button>
            </div>
            <StickyScrollRevealDemo />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center px-4 py-44 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex justify-center items-center w-full gap-8">
              <div className="flex flex-col justify-end w-full gap-4">
                <div className="text-4xl font-semibold text-secondary">
                  Still cant find right Properties?
                </div>
                <div className="text-secondaryLight max-w-sm text-xl">
                  Are you interested in a property or have any other inquiries?
                </div>
              </div>
              <div className="w-2/3 mt-3">
                <div className="text-secondary">
                  A comprehensive and decidedly modern real estate theme we
                  designed for all property showcase and real estate websites.
                </div>
                <div className="flex w-full mt-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="py-6 rounded-none !rounded-l focus-visible:ring-0 focus-visible:ring-offset-1 focus:border-none"
                  />
                  <Button className="!rounded-none !rounded-r">Submit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default services;
