"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel2";
import { useEffect, useState } from "react";
import { AnimatedText } from "../animations/Animatetext";

export function ReviewsSection() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const cachedReviews = localStorage.getItem("cachedReviews");
        if (cachedReviews) {
          setReviews(JSON.parse(cachedReviews));
          setLoading(false);
        } else {
          const response = await fetch("/api/testimonial");
          const data = await response.json();
          setReviews(data);
          localStorage.setItem("cachedReviews", JSON.stringify(data));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const cards = reviews.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section className="bg-[url('../../public/assets/images/home/reviewBg.png')] bg-fixed bg-cover bg-no-repeat py-24">
      <div className="w-full h-full">
        <div className="flex text-center justify-center text-[2rem] lg:text-5xl font-semibold">
          What our customers say?
        </div>

        <div className="text-center text-[#596460] mt-6">
          Hear from our satisfied customers and clients.
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
