import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import { aboutscreen } from "../../../public/assets/images";
import { cn } from "@/lib/utils";

export function FollowingPointerDemo({ content }: { content: any }) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento  transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        
      )}
    >
        
      <FollowerPointerCard
        title={
          <TitleComponent
            title={content.author}
            avatar={content.authorAvatar}
          />
        }
      >
        <div className=" h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 h-48 relative">
            <Image
              src={content.iamge}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95  group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
           <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {content.title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {content.description}
        </div>
            <div className="flex flex-row justify-between items-center mt-4">
              <span className="text-sm text-gray-500">{content.date}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const content = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: aboutscreen.aboutHero,
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
