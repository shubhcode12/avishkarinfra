import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";

export const MotionCounter = ({ value = 0, duration = 2, className = "" }) => {
   const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -100px 0px"  // Trigger animation slightly before element comes into view
  });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      
      return animation.stop;
    }
  }, [value, duration, isInView, count]);

  return (
    <motion.div
      ref={ref}
     
    >
      {rounded}
    </motion.div>
  );
};