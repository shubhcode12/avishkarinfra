import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroWithOceanVideo() {
  const [scrollY, setScrollY] = useState(0);
  const y = useMotionValue(0);
  const videoScale = useTransform(y, [0, 300], [1, 1.05]);
  const title1Y = useTransform(y, [0, 100], [0, -100]);
  const title2Y = useTransform(y, [0, 100], [100, 0]);
  const title1Opacity = useTransform(y, [0, 50, 100], [1, 0.5, 0]);
  const title2Opacity = useTransform(y, [0, 50, 100], [0, 0.5, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      y.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
        <source src="../assets/Homepage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-9"></div>

      <div className="absolute backdrop-blur-sm bottom-0 left-0 w-full">
        <div className="relative z-9 text-white px-10 py-6 w-full">
          <p className="text-xl mb-4 text-start font-light tracking-wide max-w-sm">
            Discover the Advantages of Eco-Friendly Homes with Our Real Estate
            Agency.
          </p>

          <div className="relative text-start h-24">
            <motion.h1
              style={{ y: title1Y, opacity: title1Opacity }}
              className="text-4xl font-family: 'Manrope', sans-serif; md:text-5xl lg:text-6xl font-bold mb-8 leading-tight absolute w-full ">
              Elevate your lifestyle with us
            </motion.h1>
            <motion.h1
              style={{ y: title2Y, opacity: title2Opacity }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight absolute w-full">
              Avishkar Infra Kolhapur
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
