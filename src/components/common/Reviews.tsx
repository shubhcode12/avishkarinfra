"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel2";
 
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
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
 
const data = [
  {
    category: "",
    title: "Susan Lanre",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    rating: 4.0,
    desc:"“ I recently sold my home with EcoHaven Realty, and I couldn't be happier with the experience. The team was knowledgeable, professional, and really took the time to understand what was important to me. ”"
  },
  {
    category: "",
    title: "David T.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    rating: 4.9,
    desc:' “ I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ”'
  },
  {
    category: "",
    title: "Felix Jimoh",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    rating: 4.9,
    desc:'“ EcoHaven Realty is an amazing real estate agency that truly understands the importance of sustainability and eco-friendliness. They helped me find a beautiful home that was not only environmentally conscious. ”'
  },
 
  {
    category: "",
    title: "John Doe",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    rating: 4.9,
    desc:"“ I recently sold my home with EcoHaven Realty, and I couldn't be happier with the experience. The team was knowledgeable, professional, and really took the time to understand what was important to me. ”"
  },
  {
    category: "",
    title: "Joe Tribioni",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    rating: 4.9,
    desc:"“ I recently sold my home with EcoHaven Realty, and I couldn't be happier with the experience. The team was knowledgeable, professional, and really took the time to understand what was important to me. ”"
  },
  {
    category: "",
    title: "Chanddler Bing",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    rating: 4.9,
    desc:"“ I recently sold my home with EcoHaven Realty, and I couldn't be happier with the experience. The team was knowledgeable, professional, and really took the time to understand what was important to me. ”"
  },
];