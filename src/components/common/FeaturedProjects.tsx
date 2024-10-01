"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

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
  id,
  title,
  address,
  image,
  index,
  totalProjects,
}: {
  id: string;
  title: string;
  address: string;
  image: string;
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
  const router = useRouter();
  return (
    <motion.div
      ref={cardRef}
      className={"mb-32 last:mb-0 sticky top-0 bg-white rounded-lg"}
      style={{ zIndex }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}>
      <div className="flex flex-col items-center mt-2 border-b-1 border-t border-gray-300">
        <div className="w-full flex justify-between mt-10 items-center mb-8">
          <p className="text-sm lg:text-xl text-gray-800">{id}</p>
          <p className="text-sm lg:text-xl text-gray-800">{title}</p>
          <p className="text-sm lg:text-xl text-gray-800">{address}</p>

          <button
            onClick={() => router.push(`../projects/${id}`)}
            className="text-sm lg:text-xl text-gray-800 hover:text-gray-800 transition-colors">
            View →
          </button>
        </div>
        <motion.div
          ref={ref}
          className="w-full mt-4 overflow-hidden"
          style={{ y }}>
          <img
            src={image}
            alt={title}
            className="w-full aspect=[4/3] object-cover mt-0"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FeatureProjects() {
  const [stickyRef, isSticky] = useSticky();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();

    return () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
  }, []);

  return (
    <div className="w-full mx-auto px-0">
      <div className="border-b-1 border-t border-gray-600"></div>
      <div className="flex flex-col lg:flex-row w-full mt-8 gap-8 mb-8">
        <div className="flex flex-col lg:w-1/2">
          <div className="text-3xl font-medium mt-4">FEATURED PROJECTS</div>
        </div>

        <div className="flex flex-col lg:text-end lg:justify-end">
          <p className="text-lg text-[#0e0f23] mb-4 max-w-2xl">
            Our developments span across the city, blending timeless design with
            comfortable living spaces for every lifestyle.
          </p>
        </div>
      </div>
      <div ref={stickyRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            address={project.address}
            image={project.image.url}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </div>
      <div className="h-12 w-full bg-white"></div>
    </div>
  );
}
