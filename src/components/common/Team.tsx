"use client";
import { Card, Carousel } from "@/components/ui/team-card-carousel";
import Image from "next/image";
import Team1 from "../../../public/assets/images/about/amin-sanade.jpg";
import Team2 from "../../../public/assets/images/about/prakash-shinge.jpg";
import Team3 from "../../../public/assets/images/about/sangram-patil.jpg";
import { AboutPage } from "@/data/static_content";


export function AppleCardsCarouselDemo() {
  const cards = AboutPage.teamData.map((card, index) => (
    <Card title={card.title} key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}