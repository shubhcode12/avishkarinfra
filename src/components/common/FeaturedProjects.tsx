"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const projects = [
  {
    id: "01",
    name: "Nandini Jadhav",
    location: "Kolhapur",
    image: "https://i.postimg.cc/NfZLPZ9K/image.png",
  },
  {
    id: "02",
    name: "Green Valley Heights",
    location: "Pune",
    image: "https://i.postimg.cc/NfZLPZ9K/image.png",
  },
  {
    id: "03",
    name: "Riverside Residences",
    location: "Mumbai",
    image: "https://i.postimg.cc/NfZLPZ9K/image.png",
  },
  {
    id: "04",
    name: "Adhiraj Residency",
    location: "Mumbai",
    image: "https://i.postimg.cc/NfZLPZ9K/image.png",
  },
];

const backgroundColors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-teal-100",
];

function useSticky() {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      { threshold: [1] }
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, []);

  return [ref, isSticky] as const;
}

function ProjectCard({
  project,
  index,
  totalProjects,
}: {
  project: { id: string; name: string; location: string; image: string };
  index: number;
  totalProjects: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const zIndex = totalProjects + index;
 const router = useRouter()
  return (
    <motion.div
      ref={cardRef}
      className={'mb-32 last:mb-0 sticky top-0 bg-white p-8 rounded-lg'}
      style={{ zIndex }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}>
      <div className="flex flex-col items-center border-b-1 border-t border-gray-300">       
        <div className="w-full flex justify-between mt-10 items-center mb-8">
          <p className="text-xl text-gray-800">{project.id}</p>
          <p className="text-xl text-gray-800">{project.name}</p>
          <p className="text-xl text-gray-800">{project.location}</p>

          <button onClick={()=>router.push(`../projects/${project.id}`)} className="text-xl text-gray-800 hover:text-gray-800 transition-colors">
            View →
          </button>
        </div>
        <motion.div ref={ref} className="w-full mt-4 overflow-hidden" style={{ y }}>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover mt-4"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FeatureProjects() {
  const [stickyRef, isSticky] = useSticky();

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="border-b-1 border-t border-gray-600"></div>
      <div className="grid grid-cols-12 gap-0 mb-16 mt-8">      
        <div className="col-span-6">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        </div>
        <div className="col-span-6">
          <p className="text-2xl text-[#0e0f23]">
            Our developments span across the city, blending timeless design with
            comfortable living spaces for every lifestyle.
          </p>
        </div>
      </div>
      <div ref={stickyRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </div>
      <div className="h-12 w-full bg-white"></div>
    </div>
  );
}