import Image from "next/image";
import React from "react";
import { logo } from "../../../public/assets/images";
import Link from "next/link";
import { Target } from "lucide-react";

const Footer = () => {
  return (
    <div className="p-2 bg-white">
      <div className="bg-secondary rounded-3xl  w-full">
        <div className="flex justify-center w-full p-10">
          <div className="max-w-6xl w-full ">
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="w-full lg:w-4/5 flex flex-col gap-4">
                <div>
                  <Image src={logo.logofooter} className="h-12 w-44" alt="" />
                </div>
                <div className="text-white max-w-xs">
                  Avishkar Infra is a distinguished name among real estate
                  builders in Kolhapur, and it is known for spearheading
                  numerous prestigious and iconic projects in the city.
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-4 justify-evenly lg:gap-10">
                <div className="lg:w-full pt-4 flex flex-col gap-4">
                  <div className="text-white font-semibold text-xl">
                    Contact
                  </div>
                  <div className="text-white max-w-xs">
                    Business Bay Building, Avishkar Infra, Tarabai Park,
                    Kolhapur
                  </div>
                  <div className="text-white max-w-xs">
                    info@avishkarinfra.com
                  </div>
                  <div className="text-white max-w-xs">
                    7276080909
                  </div>
                </div>
                <div className="flex justify-between flex-row w-full">
                  <div className="lg:w-1/2 pt-4 flex flex-col justify-start items-start gap-4">
                    <div className="text-white font-semibold text-xl">
                      Company
                    </div>
                    <Link href={"/about"} className="text-white max-w-xs">
                      About us
                    </Link>
                    <Link href={"/projects"} className="text-white max-w-xs">
                      Projects
                    </Link>
                    <Link href={"/services"} className="text-white max-w-xs">
                      Services
                    </Link>
                    <Link href={"/contact"} className="text-white max-w-xs">
                      Contact
                    </Link>
                  </div>
                  <div className="lg:w-1/3 pt-4 flex flex-col justify-start items-start gap-4">
                    <div className="text-white font-semibold text-xl">
                      Social
                    </div>
                    <Link href={"/about"} className="text-white max-w-xs">
                      About us
                    </Link>
                    <Link href={"/projects"} className="text-white max-w-xs">
                      Projects
                    </Link>
                    <Link href={"/services"} className="text-white max-w-xs">
                      Services
                    </Link>
                    <Link href={"/contact"} className="text-white max-w-xs">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden w-full">
          <div className=" py-0 lg:py-4 animate-marquee whitespace-nowrap ">
            <span className="mx-4 text-white text-4xl lg:text-7xl font-bold">
              GET IN TOUCH{" "}
              <span className="text-5xl lg:text-8xl font-bold text-primary">
                -
              </span>
            </span>
            <span className="mx-4 text-white text-4xl lg:text-7xl font-bold">
              GET IN TOUCH{" "}
              <span className="text-5xl lg:text-8xl font-bold text-primary">
                -
              </span>
            </span>
            <span className="mx-4 text-white text-4xl lg:text-7xl font-bold">
              GET IN TOUCH{" "}
              <span className="text-5xl lg:text-8xl font-bold text-primary">
                -
              </span>
            </span>
            <span className="mx-4 text-white text-4xl lg:text-7xl font-bold">
              GET IN TOUCH{" "}
              <span className="text-5xl lg:text-8xl font-bold text-primary">
                -
              </span>
            </span>
            <span className="mx-4 text-white text-4xl lg:text-7xl font-bold">
              GET IN TOUCH{" "}
              <span className="text-5xl lg:text-8xl font-bold text-primary">
                -
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center p-10 mt-8 w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex   justify-between w-full border-[#adadad] border-t-[0.5px]">
              <div className="flex flex-col justify-between lg:flex-row w-full gap-4 mt-4">
                <div className="w-full">
                  <div className="text-white text-xs">
                    Copyright &#169; 2022. All rights reserved
                  </div>
                  <div className="mt-1 text-white text-xs">
                    Avishkar Infra, Kolhapur
                  </div>
                </div>
                <div className="flex w-full justify-between lg:justify-end  gap-8 lg:gap-2">
                  <Link target="_blank" href={"https://www.facebook.com/avishkarinfra/"}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="white" />
                      <path
                        d="M34 24C34 18.48 29.52 14 24 14C18.48 14 14 18.48 14 24C14 28.84 17.44 32.87 22 33.8V27H20V24H22V21.5C22 19.57 23.57 18 25.5 18H28V21H26C25.45 21 25 21.45 25 22V24H28V27H25V33.95C30.05 33.45 34 29.19 34 24Z"
                        fill="#213123"
                      />
                    </svg>
                  </Link>
                  <Link target="_blank" href={"https://www.linkedin.com/company/avishkar-infra"}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="white" />
                      <path
                        d="M31 15C31.5304 15 32.0391 15.2107 32.4142 15.5858C32.7893 15.9609 33 16.4696 33 17V31C33 31.5304 32.7893 32.0391 32.4142 32.4142C32.0391 32.7893 31.5304 33 31 33H17C16.4696 33 15.9609 32.7893 15.5858 32.4142C15.2107 32.0391 15 31.5304 15 31V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H31ZM30.5 30.5V25.2C30.5 24.3354 30.1565 23.5062 29.5452 22.8948C28.9338 22.2835 28.1046 21.94 27.24 21.94C26.39 21.94 25.4 22.46 24.92 23.24V22.13H22.13V30.5H24.92V25.57C24.92 24.8 25.54 24.17 26.31 24.17C26.6813 24.17 27.0374 24.3175 27.2999 24.5801C27.5625 24.8426 27.71 25.1987 27.71 25.57V30.5H30.5ZM18.88 20.56C19.3256 20.56 19.7529 20.383 20.0679 20.0679C20.383 19.7529 20.56 19.3256 20.56 18.88C20.56 17.95 19.81 17.19 18.88 17.19C18.4318 17.19 18.0019 17.3681 17.685 17.685C17.3681 18.0019 17.19 18.4318 17.19 18.88C17.19 19.81 17.95 20.56 18.88 20.56ZM20.27 30.5V22.13H17.5V30.5H20.27Z"
                        fill="#213123"
                      />
                    </svg>
                  </Link>                 
                  <Link target="_blank" href={"https://www.instagram.com/avishkarinfra" }>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="white" />
                      <path
                        d="M24 14C26.717 14 27.056 14.01 28.122 14.06C29.187 14.11 29.912 14.277 30.55 14.525C31.21 14.779 31.766 15.123 32.322 15.678C32.8305 16.1779 33.224 16.7826 33.475 17.45C33.722 18.087 33.89 18.813 33.94 19.878C33.987 20.944 34 21.283 34 24C34 26.717 33.99 27.056 33.94 28.122C33.89 29.187 33.722 29.912 33.475 30.55C33.2247 31.2178 32.8311 31.8226 32.322 32.322C31.822 32.8303 31.2173 33.2238 30.55 33.475C29.913 33.722 29.187 33.89 28.122 33.94C27.056 33.987 26.717 34 24 34C21.283 34 20.944 33.99 19.878 33.94C18.813 33.89 18.088 33.722 17.45 33.475C16.7823 33.2245 16.1775 32.8309 15.678 32.322C15.1694 31.8222 14.7759 31.2175 14.525 30.55C14.277 29.913 14.11 29.187 14.06 28.122C14.013 27.056 14 26.717 14 24C14 21.283 14.01 20.944 14.06 19.878C14.11 18.812 14.277 18.088 14.525 17.45C14.7752 16.7822 15.1688 16.1773 15.678 15.678C16.1777 15.1692 16.7824 14.7757 17.45 14.525C18.088 14.277 18.812 14.11 19.878 14.06C20.944 14.013 21.283 14 24 14ZM24 19C22.6739 19 21.4021 19.5268 20.4645 20.4645C19.5268 21.4021 19 22.6739 19 24C19 25.3261 19.5268 26.5979 20.4645 27.5355C21.4021 28.4732 22.6739 29 24 29C25.3261 29 26.5979 28.4732 27.5355 27.5355C28.4732 26.5979 29 25.3261 29 24C29 22.6739 28.4732 21.4021 27.5355 20.4645C26.5979 19.5268 25.3261 19 24 19ZM30.5 18.75C30.5 18.4185 30.3683 18.1005 30.1339 17.8661C29.8995 17.6317 29.5815 17.5 29.25 17.5C28.9185 17.5 28.6005 17.6317 28.3661 17.8661C28.1317 18.1005 28 18.4185 28 18.75C28 19.0815 28.1317 19.3995 28.3661 19.6339C28.6005 19.8683 28.9185 20 29.25 20C29.5815 20 29.8995 19.8683 30.1339 19.6339C30.3683 19.3995 30.5 19.0815 30.5 18.75ZM24 21C24.7956 21 25.5587 21.3161 26.1213 21.8787C26.6839 22.4413 27 23.2044 27 24C27 24.7956 26.6839 25.5587 26.1213 26.1213C25.5587 26.6839 24.7956 27 24 27C23.2044 27 22.4413 26.6839 21.8787 26.1213C21.3161 25.5587 21 24.7956 21 24C21 23.2044 21.3161 22.4413 21.8787 21.8787C22.4413 21.3161 23.2044 21 24 21Z"
                        fill="#213123"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
