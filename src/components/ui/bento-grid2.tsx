import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconClock, IconMapPinFilled } from "@tabler/icons-react";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import { useRouter } from "next/router";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4  mx-auto ",
        className
      )}>
      {children}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  imageUrl,
  icon,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl?: string | React.ReactNode;
  icon?: React.ReactNode;
  id:string
}) => {
  const router =useRouter()
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento h-fit hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
        className
      )}>
      <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src={imageUrl as string} 
          alt="header" 
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-2">
          <div className="text-xl font-bold hover:underline cursor-pointer dark:text-neutral-200 line-clamp-1">
            {title}
          </div>
          <div className="text-secondaryLight line-clamp-2">{description}</div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 space-y-2 sm:space-y-0">
          <div className="text-secondary flex items-center font-semibold">
            <IconMapPinFilled className="text-primary mr-1" />
            <span className="text-sm">{icon}</span>
          </div>
          <Button onClick={()=>router.push(`../projects/${id}`)} className="flex justify-center items-center w-full sm:w-auto gap-2">
            <span>View</span>
            <Image src={common.arrowCrossRight} alt="" width={16} height={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};