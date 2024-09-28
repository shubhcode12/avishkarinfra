import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import { aboutscreen } from "../../../public/assets/images";
import { cn } from "@/lib/utils";

export function FollowingPointerDemo({ content }: { content: any }) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento  transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4"
      )}>
      <FollowerPointerCard>
        <div className=" h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-200">
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              {content.categories}
            </span>
          </div>
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 h-48 relative">
            <Image
              src={content.featured_media_src_url}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95  group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 line-clamp-2">
              {content.title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {content.excerpt.replace(/<[^>]*>/g, '').substring(0, 100)}...
            </div>
            <div className="flex flex-row justify-between items-center mt-6">
              <span className="text-sm text-gray-500">
                {new Date(content.date).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
              <div className="relative z-10 px-6 py-2 bg-primary text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}
