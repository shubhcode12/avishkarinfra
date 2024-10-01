import Navbar from "@/components/common/Navbar";
import React from "react";
import { common } from "../../public/assets/icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { aboutscreen, Homescreen } from "../../public/assets/images";
import { AppleCardsCarouselDemo } from "@/components/common/Team";
import { StickyScrollRevealDemo } from "@/components/common/Sticky";
import { useRouter } from "next/router";
import Footer from "@/components/common/Footer";
import TextRevealByWord from "@/components/ui/TextReveal";
const About = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <section className="w-full flex py-14 pt-28 lg:pt-40 justify-center px-4 lg:px-10 ">
        <div className="flex px-8 justify-center w-full">
          <div className=" w-full ">
            {/* <TextRevealByWord text="Welcome to Avishkar Infra! Best builders and developers in Kolhapur"/> */}
            {/* <div className="flex flex-col gap-8">
              <div className="flex">
                <div className="w-full flex flex-col justify-evenly">
                  <div className="text-secondary font-semibold text-6xl">
                    About Avishkar Infra
                  </div>
                  <div>
                    Founded on a shared vision of redefining the real estate
                    experience, Citadel emerged from a passion for creating
                    lasting connections between people and their ideal living
                    spaces.
                  </div>
                  <div className="flex justify-start items-end">
                    <Button
                      onClick={() => router.push("/contactus")}
                      className="flex justify-center gap-2">
                      <span>Contact us</span>
                      <span>
                        <Image src={common.arrowCrossRight} alt="" />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="w-full">
                  <Image src={Homescreen.property1} alt="" />
                </div>
              </div>
              <div className="flex w-full justify-center">
                <div className="">
                  <Image
                    src={Homescreen.property1}
                    className="w-auto h-72"
                    alt=""
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f7f7f7] flex pt-32 pb-24 justify-center px-4 lg:px-0">
        <div className="flex px-8 justify-center w-full">
          <div className=" w-full ">
            <div className="flex flex-col gap-8">
              <div className="text-4xl text-secondary font-semibold">
                About Avishkar Infra
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-4 justify-center items-center">
                <div className="w-full">
                  <div>
                    <Image
                      src={Homescreen.property1}
                      className="w-auto h-[30rem]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  Avishkar Infra is a distinguished name among real estate
                  builders in Kolhapur, and it is known for spearheading
                  numerous prestigious and iconic projects in the city. Our
                  vision to exceed and our passion to excel drive us to push
                  boundaries and set new standards in the industry. As the
                  leading builders in Kolhapur, we leverage our extensive
                  experience and deep knowledge to develop premium, high-quality
                  real estate projects.
                </div>
              </div>
              <div className="flex flex-col lg:flex-row-reverse  gap-4 justify-center items-center">
                <div className="w-full">
                  <div className="">
                    <Image
                      src={Homescreen.property1}
                      className="w-auto h-[30rem]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-4xl text-secondary font-semibold">
                    Vision & Mission
                  </div>
                  To set new benchmarks in the real estate industry by
                  continuously pushing boundaries, delivering innovative,
                  premium-quality projects, and shaping the future skyline of
                  Kolhapur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  flex pt-32 pb-24 justify-center px-4 lg:px-0">
        <div className="flex px-8 justify-center w-full">
          <div className=" w-full ">
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="w-full text-4xl font-semibold">
                  <div className="text-center"> Our Services </div>{" "}
                  <div className="w-48 bg-primary h-22"></div>
                </div>
                <div className="w-full">
                  <div className="text-xl">Commercial Real Estate</div>
                  <div className="w-full my-5 h-[0.5px] bg-secondary"></div>
                  <div className="text-xl">Relocation Services</div>
                  <div className="w-full my-5 h-[0.5px] bg-secondary"></div>
                  <div className="text-xl">Property Management</div>
                  <div className="w-full my-5 h-[0.5px] bg-secondary"></div>
                  <div className="text-xl">Investment Properties</div>
                </div>
                <div className="w-full">
                  <div className="text-xl">Home Inspections</div>
                  <div className="w-full my-5 h-[0.5px] bg-secondary"></div>
                  <div className="text-xl">Interior Design</div>
                  <div className="w-full my-5 h-[0.5px] bg-secondary"></div>
                  <div className="text-xl">New Construction</div>
                  <div className="w-full my-5 h-[0.5px] bg-secondary"></div>
                  <div className="text-xl">Land Acquisition</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#666666] bg-opacity-20 flex flex-col justify-center px-4 pt-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col gap-8">
              <div className="flex justify-start">
                <Button className="bg-white text-secondary border-primary border-2 hover:text-white">
                  Our Team
                </Button>
              </div>
              <div className="text-start text-secondary font-semibold text-3xl">
                Who drives the Avishkar
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#666666] bg-opacity-20">
        <AppleCardsCarouselDemo />
      </div>
      <section className="w-full flex flex-col justify-center px-4 pt-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col gap-8">
              {/* <div className="flex justify-start">
                <Button className="bg-white text-secondary border-primary border-2 hover:text-white">
                  Our Team
                </Button>
              </div> */}
              <div className="text-start max-w-3xl text-primary font-semibold text-4xl">
                Welcome to Avishkar Infra! Best builders and developers in
                Kolhapur
              </div>
            </div>
            <div className="text-secondary text-xl my-12 font-thin">
              Avishkar Infra is a distinguished name among real estate builders
              in Kolhapur, and it is known for spearheading numerous prestigious
              and iconic projects in the city. Our vision to exceed and our
              passion to excel drive us to push boundaries and set new standards
              in the industry. As the leading builders in Kolhapur, we leverage
              our extensive experience and deep knowledge to develop premium,
              high-quality real estate projects. Our commitment to quality
              construction is unwavering. We prioritize using top-tier materials
              and innovative techniques to ensure every project we undertake
              meets the highest standards of excellence. This dedication has not
              only enhanced our reputation but also established us as one of the
              most trusted land developers in Kolhapur. At Avishkar Infra, we
              believe in creating spaces that blend convenience with luxury. Our
              projects are thoughtfully designed to provide amenities that cater
              to modern lifestyles, ensuring our customers enjoy a comfortable
              and fulfilling living experience. Whether it&apos;s a premium
              bungalow or a large-scale development, we focus on every detail to
              deliver homes that our customers can be proud of. Our services
              encompass Design and Build, Construction Management, and the
              development of Premium Bungalows. Each service is tailored to meet
              the unique needs of our clients, ensuring a seamless and
              satisfying experience from concept to completion. Building on a
              foundation of quality and trust, Avishkar Infra continues to shape
              the skyline of Kolhapur, transforming visions into reality and
              setting benchmarks in real estate development. With every project,
              we strive to exceed expectations and contribute to the city's
              growth, reinforcing our position as a leader in the industry.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
