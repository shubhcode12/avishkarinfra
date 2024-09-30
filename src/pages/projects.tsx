import FeatureProjects from "@/components/common/FeaturedProjects";
import Navbar from "@/components/common/Navbar";
import { AppleCardsCarouselDemo } from "@/components/common/ProjectsCarousal";
import PropertiesSection from "@/components/Homesections/PropertiesSection";
import { Button } from "@/components/ui/button";
import React from "react";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full flex flex-col pt-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
              <div className="flex flex-col w-full gap-8">
                
                <div className="max-w-2xl text-6xl font-semibold leading-[70px] text-secondary">
                  Explore our diverse portfolio of exceptional properties
                </div>
                <div className="max-w-xl text-xl text-secondary">
                  Our journey began with a vision to transform property
                  investment experience, making it more personalized and
                  rewarding for every client.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <AppleCardsCarouselDemo />
        </div>
      </section>
      <section className="w-full flex flex-col  justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <FeatureProjects/>
          </div>
        </div>
      </section>
      <PropertiesSection  show={false}/>
    </div>
  );
};

export default Projects;
