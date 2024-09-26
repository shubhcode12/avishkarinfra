import { HoverEffect } from "../ui/card-hover-effect";
 
export function CardHoverEffectDemo() {
  return (
    <div className="w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Modern, Eco-Friendly Homes",
    description:
      "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
    link: "#",
  },
  {
    title: "Prime City Locations",
    description:
      "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
    link: "#",
  },
  {
    title: "Community-Focused Living",
    description:
      "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
    link: "#",
  },
  {
    title: "Sustainable Architecture",
    description:
      "Our homes are designed with energy-efficient appliances, smart home technology, and sustainable materials.",
    link: "#",
  },
];