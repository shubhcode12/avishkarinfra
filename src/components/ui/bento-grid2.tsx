import { cn } from "@/lib/utils";
import { Button } from "./button";
import { IconClock, IconMapPinFilled } from "@tabler/icons-react";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
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
        "row-span-1 rounded-xl group/bento !h-[30rem] hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* {icon} */}
        <div className="font-sans font-bold text-primary hover:underline cursor-pointer dark:text-neutral-200 ">
          {title}
        </div>
        <div className="text-secondaryLight">
          {description}
        </div>
        <div className="flex justify-between">
          <div className="text-secondary flex justify-start items-end font-semibold"><IconMapPinFilled className="text-primary mt-1" /> <span>{icon}</span></div>
          <div>
          <Button className="flex justify-center w-auto gap-2">
                    <span>View</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
          </div>
        </div>
        {/* <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div> */}
      </div>
    </div>
  );
};
