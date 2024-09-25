import Image from "next/image";
import localFont from "next/font/local";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/Navbar";
import styles from "./page.module.css";
import Navbar2 from "@/components/common/Header";
import { Homescreen } from "../../public/assets/images";
import { common } from "../../public/assets/icon";
import { useState } from "react";
import CardDemo from "@/components/blocks/cards-demo-2";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BentoGrid as BentoGrid2,
  BentoGridItem as BentoGridItem2,
} from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconClockFilled,
  IconFileBroken,
  IconLocationFilled,
  IconMapPinFilled,
  IconPhoneFilled,
  IconSend,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { AppleCardsCarouselDemo } from "@/components/common/Reviews";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  const [propertyType, setpropertyType] = useState("New to market");
  return (
    <div className="">
      <div className="absolute w-full z-10">
        <Navbar2 />
      </div>
      <section className="w-full flex justify-center">
        <main className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.backgroundVideo}
          >
            <source src="/assets/homebg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-20 lg:top-[15rem] w-full">
            <div className="flex justify-center w-full">
              <div className="max-w-6xl">
                <div className="flex flex-col lg:gap-10 justify-center items-center w-full">
                  <div className="text-3xl lg:text-6xl max-w-4xl text-center text-white font-bold flex justify-center">
                    Bringing A Refined Approach To Luxury Real Estate
                  </div>
                  <div className="w-full text-center text-white flex justify-center">
                    Discover the Advantages of Eco-Friendly Homes with Our Real
                    Estate Agency.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="w-full flex pt-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
              <div className="flex flex-col w-full gap-8">
                <div className="w-full flex justify-start items-center gap-4">
                  <div className="">
                    <svg
                      width="60"
                      height="2"
                      viewBox="0 0 60 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                <div className="text-4xl font-semibold text-secondary">
                  Discover Sustainable Luxury Living with EcoHaven Realty.
                </div>
                <div className="text-lg">
                  Established in the year 2005, Avishkar Group in Kalamba Ring
                  Road, Kolhapur is a top player in the category Builders &
                  Developers in the Kolhapur. Avishkar Infra Established in the
                  year 2017 This well-known establishment acts as a one-stop
                  destination serving customers both local and from other parts
                  of Kolhapur.
                </div>
                <div>
                  <Button className="flex justify-center gap-2">
                    <span>Our Company</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src={Homescreen.home1}
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex pt-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full border-b pb-12">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col w-full gap-8">
                <div className="text-6xl font-semibold text-secondary uppercase leading-[4rem] text-transparent bg-gradient-to-r from-secondary to-gray-300 inline-block bg-clip-text">
                  We've found luxury homes for clients for a decade.
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
      </section>
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col w-full gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:justify-start items-center lg:items-start">
                  <div className="flex  flex-col justify-center lg:justify-start gap-4 item-center lg:items-start">
                    <div className="flex lg:gap-4 justify-center lg: justify-start items-end">
                      <div className="text-7xl">10</div>
                      <div>
                        <Image src={common.plus} alt="" />
                      </div>
                    </div>
                    <div className="text-secondaryLight text-lg font-semibold text-opacity-50 text-center lg:text-start">
                      Awards Gained
                    </div>
                  </div>

                  <div className="flex  flex-col justify-center lg:justify-start gap-4 item-center lg:items-start">
                    <div className="flex lg:gap-4 justify-center lg: justify-start items-end">
                      <div className="text-7xl">20</div>
                      <div>
                        <Image src={common.plus} alt="" />
                      </div>
                    </div>
                    <div className="text-secondaryLight text-lg font-semibold text-opacity-50 text-center lg:text-start">
                      Years of Experience
                    </div>
                  </div>

                  <div className="flex  flex-col justify-center lg:justify-start gap-4 item-center lg:items-start">
                    <div className="flex lg:gap-4 justify-center lg: justify-start items-end">
                      <div className="text-7xl">598</div>
                      <div>
                        <Image src={common.plus} alt="" />
                      </div>
                    </div>
                    <div className="text-secondaryLight text-lg font-semibold text-opacity-50 text-center lg:text-start">
                      Rented Home Stay
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto lg:w-2/3"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex flex-col w-full gap-8">
              <div className="text-center text-4xl font-semibold text-secondary">
                Our Recent Projects
              </div>
              <div className="w-full flex justify-center">
                <div className="w-1/2 text-lg  text-center">
                  The agency&apos;s mission is to provide clients with a
                  selection of properties that meet high environmental
                  standards, while also providing a comfortable and luxurious
                  lifestyle.
                </div>
              </div>
              <div>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-full flex flex-col gap-8">
                    <div>
                      <Image
                        src={Homescreen.property1}
                        className="h-72"
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-primary text-white rounded-[2.8rem] flex flex-col gap-4 p-8">
                        <div className="font-semibold text-4xl">
                          20 + Projects
                        </div>
                        <div>
                          Explore our wide variety of properties to fid your
                          dream home today
                        </div>
                      </div>
                      <div>
                        <Image
                          src={Homescreen.property1}
                          className="h-72"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full rounded-[2.8rem]">
                    <div className=" w-full rounded-[2.8rem] group/card h-full">
                      <div
                        className={
                          " cursor-pointer overflow-hidden relative card h-full rounded-[2.8rem] w-full backgroundImage flex flex-col justify-between p-4 bg-[url('../../public/assets/images/home/property2.png')] bg-cover"
                        }
                      >
                        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black rounded-[2.8rem] opacity-60"></div>
                        <div></div>
                        <div className="text content">
                          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                            Aapal Ghar
                          </h1>
                          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                            Behind Sankalp Siddhi Karyalay, Puikhadi, Kolhapur
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
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col w-full gap-8">
                <div className="flex justify-start text-3xl font-semibold">
                  Explore Premium Properties Near You.
                </div>
                <div className="flex gap-8">
                  <div
                    className={`text-primary cursor-pointer hover:border-b-primary hover:border-b-2 pb-2  ${
                      propertyType == "New to market" &&
                      "border-b-primary border-b-2"
                    }`}
                    onClick={() => setpropertyType("New to market")}
                  >
                    New to market
                  </div>
                  <div
                    className={`text-primary cursor-pointer hover:border-b-primary hover:border-b-2 pb-2 ${
                      propertyType == "Nature Nearby" &&
                      "border-b-primary border-b-2"
                    }`}
                    onClick={() => setpropertyType("Nature Nearby")}
                  >
                    Nature Nearby
                  </div>
                  <div
                    className={`text-primary cursor-pointer hover:border-b-primary hover:border-b-2 pb-2 ${
                      propertyType == "Most viewed" &&
                      "border-b-primary border-b-2"
                    }`}
                    onClick={() => setpropertyType("Most viewed")}
                  >
                    Most viewed
                  </div>
                </div>
                <div className="bg-gray-400 h-[0.5px] w-full"></div>
                <div className="w-full">
                  <div className="w-full">
                    <BentoGrid className="w-full mx-auto">
                      {items.map((item, i) => (
                        <BentoGridItem
                          key={i}
                          title={item.title}
                          description={item.description}
                          header={item.header}
                          icon={item.icon}
                          className={" col-span-1"}
                        />
                      ))}
                    </BentoGrid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
          <div className="flex justify-center w-full">
            <div className="max-w-6xl w-full ">
              <div className="flex justify-center w-full gap-8">
                <div className="flex flex-col w-full gap-8">
                  <div className="flex justify-center text-3xl font-semibold">
                    Benefits of owning an eco-friendly home.
                  </div>

                  <div className="text-center">
                    High-quality homes with low-carbon impact.
                  </div>
                  <div className="w-full">
                    <div className="w-full">
                      <BentoGrid2 className="w-full mx-auto">
                        {items.map((item, i) => (
                          <BentoGridItem2
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={" col-span-1"}
                          />
                        ))}
                      </BentoGrid2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <AppleCardsCarouselDemo />
      </section>
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col lg:flex-row w-full gap-8">
                <div className="flex flex-col w-full gap-8">
                  <div className="w-full flex justify-start items-center gap-4">
                    <div className="">
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
                      FREQUENTLY ASKED QUESTIONS
                    </div>
                  </div>
                  <div className="text-4xl font-semibold text-secondary">
                    Common questions asked about our Avishkar Infra.
                  </div>
                  <div className="text-lg">
                    Here are some important questions that are frequently asked
                    and the answers to the questions.
                  </div>
                  <div className="text-secondary font-semibold text-xl">
                    Have a different question?
                  </div>
                  <div>
                    <Button className="flex justify-center gap-2">
                      <span>Contact Us</span>
                      <span>
                        <Image src={common.arrowCrossRight} alt="" />
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="w-full">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What makes EcoHaven Realty different from other real
                        estate agencies?
                      </AccordionTrigger>
                      <AccordionContent>
                        At EcoHaven Realty, we are committed to promoting
                        sustainability in the real estate industry. We
                        prioritize eco-friendly practices, such as green
                        building techniques and energy-efficient systems, in all
                        of our transactions. We believe that promoting
                        environmental responsibility is not only the right thing
                        to do, but it also benefits our clients by providing
                        long-term cost savings and a healthier living
                        environment.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Do you only work with eco-friendly properties?
                      </AccordionTrigger>
                      <AccordionContent>
                        While we specialize in promoting and selling
                        eco-friendly properties, we work with all types of
                        properties. Our focus is on promoting sustainable
                        practices and educating our clients on how they can make
                        their properties more eco-friendly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Can you help me find an eco-friendly property?
                      </AccordionTrigger>
                      <AccordionContent>
                        Absolutely! We have a database of eco-friendly
                        properties and can work with you to find a property that
                        aligns with your sustainability goals. Additionally, we
                        can provide guidance on how to make any property more
                        eco-friendly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        What is your process for ensuring a property is
                        eco-friendly?
                      </AccordionTrigger>
                      <AccordionContent>
                        We work with builders and contractors who specialise in
                        eco-friendly building practices. We also conduct
                        assessments of a property's energy and water usage, as
                        well as its overall sustainability features, to ensure
                        that it aligns with our eco-friendly standards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        Are eco-friendly properties more expensive?
                      </AccordionTrigger>
                      <AccordionContent>
                        Not necessarily. While some eco-friendly features may
                        require an initial investment, such as solar panels or
                        energy-efficient systems, they can ultimately lead to
                        long-term cost savings on utility bills. Additionally,
                        there are often government incentives and tax breaks
                        available for eco-friendly properties and features.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col lg:flex-row w-full gap-20">
                <div className="w-full">
                  <Card className="w-full">
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4 mt-8">
                          <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                placeholder="Name of your project"
                              />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Phone Number</Label>
                              <Input
                                id="phone"
                                placeholder="Enter Phone Number"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" type="email" placeholder="email" />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">
                              What is your enquiry about?*
                            </Label>
                            <Select>
                              <SelectTrigger id="framework">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                <SelectItem value="next">Next.js</SelectItem>
                                <SelectItem value="sveltekit">
                                  SvelteKit
                                </SelectItem>
                                <SelectItem value="astro">Astro</SelectItem>
                                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Additional information</Label>
                            <Textarea id="name" placeholder="Your message" />
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-center lg:justify-start">
                      <Button>Send Message</Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="w-full">
                  <div className="flex flex-col w-full gap-8">
                    <div className="text-3xl font-semibold text-secondary">
                      Get in touch to schedule a visit to your new house.
                    </div>
                    <div className="text-secondary">
                      Kindly fill this form with your details about your
                      inquiries and we would respond your inquiry shortly.
                    </div>
                    <div className="bg-[#ADADAD] h-[0.5px] w-full"></div>
                    <div className="flex flex-col w-full gap-4">
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconLocationFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Send an email</div>
                          <div className="text-primary">contact@ecohavenrealty.com</div>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconPhoneFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Give us a call</div>
                          <div className="text-primary">+234905 121 8127</div>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconMapPinFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Office address</div>
                          <div className="text-primary">11,Odo-Olowu, Ijeshatedo B/Stop, Surulere</div>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconClockFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Working hours</div>
                          <div className="text-primary">Mon - Sat: 10am - 4pm</div>
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
      <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex justify-center w-full rounded-3xl gap-8 bg-[url('../../public/assets/images/home/CTA.png')] object-cover">
              <div className="flex flex-col gap-4 py-4 px-10 my-48 bg-white rounded-3xl">
                <div className="text-secondary font-semibold text-3xl text-center max-w-md">Ready to find your eco-friendly home? </div>
                <div className="text-secondary font-semibold text-center max-w-xl">We have homes in 20+ cities across the country to choose from!</div>
                <div className="flex justify-center">

                <Button className="flex justify-center !w-auto gap-2">
                    <span>Browse homes</span>
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

      {/* <div className="hero-banner">

   <ParallaxScroll images={images}/>
   </div>
   <ParallaxScroll images={images}/>
   <ParallaxScroll images={images}/> */}
    </div>
  );
}
