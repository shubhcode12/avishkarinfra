import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconClock } from "@tabler/icons-react";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="text-secondary">$ 450,000</div>
        <div><Button className="uppercase !py-[1px]   w-8 !text-[8px]">for sale </Button></div>
      </div>
      <div className="flex text-xs justify-between">
        <div className="text-secondary">4 beds - 1 baths - 1931 sqft - Eco-friendly</div>
        <div className="flex items-center"><IconClock className="h-3.5"/> <span>2years ago</span> </div>
      </div>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* {icon} */}
        <div className="font-sans font-bold text-primary hover:underline cursor-pointer dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        {/* <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div> */}
      </div>
    </div>
  );
};
