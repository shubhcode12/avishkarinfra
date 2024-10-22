import { AnimatedText } from "@/components/animations/Animatetext";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import VideoGridDemo from "@/components/common/VideoGrid";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Gallery from "@/models/gallery";
import axios from "axios";
import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredImages, setFilteredImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get<Gallery[]>("/api/gallery");
        setGalleries(response.data);
        setFilteredImages(
          response.data.flatMap((gallery) =>
            gallery.images[0].map((image: any) => image.full_image_url)
          )
        ); // Initialize with all images
        setLoading(false);
      } catch (error) {
        console.error("Error fetching galleries:", error);
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  const categories = [
    "All",
    ...galleries.map((gallery) => gallery.title.rendered),
  ];

  const filterImages = (categoryName: string) => {
    setSelectedCategory(categoryName);

    if (categoryName === "All") {
      setFilteredImages(
        galleries.flatMap((gallery) =>
          gallery.images[0].map((image: any) => image.full_image_url)
        )
      );
    } else {
      const filtered = galleries
        .filter(
          (gallery) =>
            gallery.title.rendered &&
            gallery.title.rendered.includes(categoryName)
        )
        .flatMap((gallery) =>
          gallery.images[0].map((image: any) => image.full_image_url)
        );
      setFilteredImages(filtered);
    }
  };

  return (
    <div className="bg-[#f7f7f7]">
      <Navbar />

      <section className="w-full flex py-28 justify-center px-0 lg:pt-40 lg:px-10 bg-[#f7f7f7]">
        <div className="flex justify-center w-full">
          <div className="px-8 w-full">
            <div className="flex flex-col w-full gap-8 mb-8">
              <div className="flex flex-col lg:w-1/2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm font-semibold">GALLERY</span>
                </div>
                <div className="flex justify-center flex-col w-full gap-4">
                <div className="text-4xl lg:text-6xl font-medium mt-4">
                  <AnimatedText> 
                    Explore Our Gallery
                    </AnimatedText> 
                  </div>
                  <div className="text-secondary text-start max-w-2xl">
                    The real estate photos in our gallery have been proven to
                    get more clicks, more showings, and faster sales. See how
                    Virtuance is setting the new standard in professional real
                    estate photography and listing images!
                  </div>
                </div>
              </div>

              <div className="flex w-fit px-2 py-2 flex-wrap gap-2 mb-8 lg:bg-white lg:rounded-full overflow-x-auto">
                {categories.map((category: any) => (
                  <CategoryButton
                    key={category.id}
                    category={category}
                    selectedCategory={selectedCategory}
                    onClick={() => filterImages(category)}
                  />
                ))}
              </div>

              <div className="bg-gray-400 h-[0.5px] w-full mb-8"></div>

              <div className="flex justify-center w-full">
                <div className="w-full ">
                  {loading ? (
                    <p className="px-4 py-20 lg:py-24 lg:px-10">
                      Loading galleries...
                    </p>
                  ) : (
                    <div className="w-full">
                      <div>
                        <ParallaxScroll images={filteredImages} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <VideoGridDemo /> */}
      <Footer />
    </div>
  );
};

export default GalleryPage;
