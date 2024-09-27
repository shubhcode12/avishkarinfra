import React, { useEffect, useState } from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid2'
import   {IconArrowWaveRightUp,
IconBoxAlignRightFilled,
IconBoxAlignTopLeft,
IconClipboardCopy,
IconClockFilled,
IconFileBroken,
IconLocationFilled,
IconMapPinFilled,
IconPhoneFilled,
IconSend,
IconSignature,
IconTableColumn,
} from "@tabler/icons-react";
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
const Section6 = () => {
    const [projects, setProjects] = useState<any[]>([]); // to hold project data
  const [propertyType, setPropertyType] = useState("New to market");
  const [loading, setLoading] = useState(true); // to manage loading state
  useEffect(() => {
    // Fetch data from your API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects'); // adjust the path if needed
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex justify-center w-full gap-8">
            <div className="flex flex-col w-full gap-8">
              <div className="flex justify-start text-3xl font-semibold">
                Explore Premium Properties Near You.
              </div>
              <div className="flex gap-8">
                <div
                  className={`text-primary cursor-pointer hover:border-b-primary hover:border-b-2 pb-2 ${
                    propertyType == "New to market" && "border-b-primary border-b-2"
                  }`}
                  onClick={() => setPropertyType("New to market")}
                >
                  New to market
                </div>
                <div
                  className={`text-primary cursor-pointer hover:border-b-primary hover:border-b-2 pb-2 ${
                    propertyType == "Nature Nearby" && "border-b-primary border-b-2"
                  }`}
                  onClick={() => setPropertyType("Nature Nearby")}
                >
                  Nature Nearby
                </div>
                <div
                  className={`text-primary cursor-pointer hover:border-b-primary hover:border-b-2 pb-2 ${
                    propertyType == "Most viewed" && "border-b-primary border-b-2"
                  }`}
                  onClick={() => setPropertyType("Most viewed")}
                >
                  Most viewed
                </div>
              </div>
              <div className="bg-gray-400 h-[0.5px] w-full"></div>
              <div className="w-full">
                <div className="w-full">
                  <BentoGrid className="w-full mx-auto">
                    {loading ? (
                      Array(6).fill(0).map((_, i) => (
                        <BentoGridItem
                          key={i}
                          title="Loading..."
                          description="Loading..."
                          header={<Skeleton />}
                          icon={<Skeleton />}
                          className={"col-span-1"}
                        />
                      ))
                    ) : (
                      projects.map((project, i) => (
                        <BentoGridItem
                          key={i}
                          title={project.title}
                          description={project.summery}
                          header={<img src={project.image.sizes.medium} alt={project.image.alt || 'Project Image'} />}
                          icon={project?.address}
                          className={"col-span-1"}
                        />
                      ))
                    )}
                  </BentoGrid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section6
