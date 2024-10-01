import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { StickyScrollRevealDemo } from "@/components/common/Sticky";
import { Button } from "@/components/ui/button";
import React from "react";
import { common } from "../../public/assets/icon";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import HeroWithOceanVideo from "@/components/common/HeroVideo";
import { ServiceCrad } from "@/components/common/ServiceCrad";
import { Homescreen } from "../../public/assets/images";
import { cn } from "@/lib/utils";
import CTA from "@/components/common/CTA";
const services = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full flex h-[30rem] justify-center px-4 lg:px-0 ">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <div className=" lg:w-1/2 flex text-4xl  lg:text-7xl font-thin justify-center">
          Excellence in Every Service
          {/* <HeroWithOceanVideo /> */}
          </div>
          <div className="lg:w-1/2 text-xl lg:max-w-xl lg:text-center flex justify-center">Your satisfaction is my standard, and I take pride in delivering nothing short of excellence.</div>
        </div>
      </section>
      <section className="w-full flex -mt-28 lg:mt-0 h-[50rem] justify-center px-4 lg:px-0 ">
        <div className="flex justify-center w-full">
          <div className=" w-full px-8 hover:px-0">
          <HeroWithOceanVideo />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col -mt-96 lg:mt-24 justify-center px-4 lg:px-0 ">
        <div className="flex flex-col gap-2 justify-center w-full">
          <div className="text-center w-full">
          Unmatched Satisfaction
          </div>
          <div className="flex w-full justify-center items-center text-center">

          <div className="text-4xl text-center max-w-xl">
          Services Tailored to Exceed Your Every Need
          </div>
          </div>
        </div>
        <div className="w-full flex mt-14 justify-center">
          <div className="grid gap-4 justify-center grid-cols-1 lg:grid-cols-4">
            <ServiceCrad/>
            <ServiceCrad/>
            <ServiceCrad/>
            <ServiceCrad/>
          </div>
        </div>
      </section>
      <section className="mt-24 px-8 bg-[url('../../public/assets/images/home/reviewBg.png')] bg-fixed bg-cover bg-no-repeat py-24">
      <div className="flex w-full justify-center gap-8 items-center">

      <div className="w-full h-full">
        <div className="flex text-center justify-center text-white text-5xl font-semibold">
        Maximizing Potential, One Space at a Time
        </div>
      </div>
      <div>
        <Image src={Homescreen.property2} alt=""/>
      </div>
      </div>
    </section>
      <section className="w-full flex flex-col px-8  my-24 justify-center px-4 lg:px-0 ">
        <div className="flex flex-col gap-2 justify-center w-full">
          
          <div className="flex w-full justify-start items-center text-start">

          <div className="text-5xl lg:pl-8 text-start max-w-xl">
          Services Tailored to Exceed Your Every Need
          </div>
          </div>
        </div>
        <div className="w-full flex flex-col px-8 gap-5 lg:flex-row mt-14 justify-center">
          <div className="w-full">
          <div className="flex justify-center gap-2 items-center">
            <div className="border-primary border-2 p-5 text-xl rounded">
              01
            </div>
            <div className="w-full h-1 bg-primary rounded"></div>
          </div>
          <div>
            <div className="text-secondary mt-4 font-semibold">Consultation</div>
            <div className="text-secondaryLight text-xl">
            Personalized discussion to understand your real estate goals.
            </div>
          </div>
          <div>
          <div
        className={
         cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )
        }
      >
        
      </div>
          </div>
          </div>
          <div className="w-full">
          <div className="flex justify-center gap-2 items-center">
            <div className="border-primary border-2 p-5 text-xl rounded">
              02
            </div>
            <div className="w-full h-1 bg-primary rounded"></div>
          </div>
          <div>
            <div className="text-secondary mt-4 font-semibold">Property Search & Analysis</div>
            <div className="text-secondaryLight text-xl">
            Meticulous search for properties aligned with your objectives.
            </div>
          </div>
          <div>
          <div
        className={
         cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )
        }
      >
        
      </div>
          </div>
          </div>
          <div className="w-full">
          <div className="flex justify-center gap-2 items-center">
            <div className="border-primary border-2 p-5 text-xl rounded">
              03
            </div>
            <div className="w-full h-1 bg-primary rounded"></div>
          </div>
          <div>
            <div className="text-secondary font-semibold mt-4">Negotiation & Transactions</div>
            <div className="text-secondaryLight text-xl">
            Strategic negotiation for favorable terms, ensuring a seamless process.
            </div>
          </div>
          <div>
          <div
        className={
         cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )
        }
      >
        
      </div>
          </div>
          </div>
          </div>
        
      </section>
      
      <CTA/>
     
      <Footer />
    </div>
  );
};

export default services;
