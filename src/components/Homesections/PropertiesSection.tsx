import Link from "next/link";
import { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid2";
import { AnimatedText } from "../animations/Animatetext";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const CategoryButton = ({ category, selectedCategory, onClick }: any) => (
  <button
    key={category.id || category}
    onClick={() => onClick(category.name || category)}
    className={`px-4 py-2 rounded-full text-sm ${
      category.name === selectedCategory || category === selectedCategory
        ? "bg-[#ef7f1a] text-white"
        : "bg-white text-black border border-gray-300"
    }`}>
    {category.name || category}
  </button>
);

const PropertiesSection = (data: { show: boolean }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://avishkar.giantwheeltech.com/wp-json/wp/v2/project_category"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProjects();
    fetchCategories();
  }, []);

  const filterProjects = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (categoryName === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category && project.category.includes(categoryName)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="w-full flex py-28 justify-center px-0 lg:px-10 bg-[#f7f7f7]">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex flex-col lg:flex-row w-full gap-8 mb-8">
            <div className="flex flex-col lg:w-1/2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                <span className="text-sm font-semibold">PROPERTIES</span>
              </div>
              <div className="text-4xl lg:text-6xl font-medium mt-4">
              <AnimatedText> 
                Newest Deals
                </AnimatedText>
                <AnimatedText> 

                 For Your Needs.
                </AnimatedText> 
              </div>
            </div>
            {data.show && (
              <div className="flex flex-col lg:text-end lg:justify-end">
                <p className="text-lg text-[#596460] mb-4 max-w-2xl">
                  Discover a curated selection of meticulously crafted
                  properties that perfectly blend modern architecture with
                  natural beauty.
                </p>
                <Link href="/properties" passHref>
                  <button className="bg-[#ef7f1a] text-white px-6 py-3 rounded-full w-fit self-end">
                    View All Properties
                  </button>
                </Link>
              </div>
            )}
          </div>
          {/* Category Buttons */}
          <div className="flex w-fit px-2 py-2 flex-wrap gap-2 mb-8 lg:bg-white lg:rounded-full overflow-x-auto">
            {/* All Button */}
            <CategoryButton
              category="All"
              selectedCategory={selectedCategory}
              onClick={filterProjects}
            />
            {/* Dynamic Category Buttons */}
            {categories.map((category: any) => (
              <CategoryButton
                key={category.id}
                category={category}
                selectedCategory={selectedCategory}
                onClick={filterProjects}
              />
            ))}
          </div>

          <div className="bg-gray-400 h-[0.5px] w-full mb-8"></div>

          {/* Project Grid */}
          <div className="w-full">
            <BentoGrid className="w-full mx-auto gap-8">
              {loading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <BentoGridItem
                        key={i}
                        title="Loading..."
                        description="Loading..."
                        imageUrl={<Skeleton />}
                        icon={<Skeleton />}
                        className={"col-span-1"}
                        id=""
                      />
                    ))
                : filteredProjects.map((project, i) => (
                    <BentoGridItem
                      key={i}
                      title={project.title}
                      description={project.summery}
                      imageUrl={project.image.url}
                      icon={project?.address}
                      className={"col-span-1"}
                      id={project.id.toString()}
                    />
                  ))}
            </BentoGrid>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
