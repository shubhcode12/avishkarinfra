"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel2";
 
export function AppleCardsCarouselDemo() {
  const [reviews, setReviews] = useState<any[]>([]); // to hold project data
  const [propertyType, setPropertyType] = useState("New to market");
  const [loading, setLoading] = useState(true); // to manage loading state
  useEffect(() => {
    // Fetch data from your API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/testimonial'); // adjust the path if needed
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  const cards = reviews.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
 
  return (
    <div className="w-full h-full py-12">
      <h2 className="px-8 pl-4 mx-auto text-xl text-center md:text-4xl font-bold text-secondary font-sans">
      What our customers say?
      </h2>
      <div className="text-secondary text-center mt-4 text-lg">
      Hear from our satisfied customers and clients.
      </div>
      <Carousel items={cards} />
    </div>
  );
}
 
const DummyContent = () => {
  
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
 
