import React from "react";
import { motion } from "framer-motion";
export default function HeroWithOceanVideo() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        aria-hidden="true">
        <source
          src="../assets/Homepage.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-9"></div>

      <div className="absolute bottom-0 left-0 p-4">
        <div className="relative z-9 text-start text-white px-4 py-6 max-w-4xl mx-auto">
          <p className="text-xl mb-4 font-light tracking-wide max-w-sm">
            Discover the Advantages of Eco-Friendly Homes with Our Real Estate
            Agency.
          </p>
          
          <motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Elevate your lifestyle with us
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}