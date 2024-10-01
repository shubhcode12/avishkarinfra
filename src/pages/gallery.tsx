import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "@/models/gallery";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import VideoGridDemo from "@/components/common/VideoGrid";

const GalleryPage = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredImages, setFilteredImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
    <div className="bg-[#666666] bg-opacity-20">
      <Navbar />
      <section className="w-full flex flex-col justify-center px-4 pt-20 lg:pt-32 pb-6 lg:px-10">
        <div className="flex justify-center flex-col w-full gap-4">
          <div className="text-6xl font-semibold text-secondary">
            Explore Our Gallery
          </div>
          <div className="text-secondary text-start max-w-2xl">
            The real estate photos in our gallery have been proven to get more
            clicks, more showings, and faster sales. See how Virtuance is
            setting the new standard in professional real estate photography and
            listing images!
          </div>
        </div>
      </section>

      <section className="w-full flex mb-12 flex-col justify-center ">
        <div className="px-4 lg:px-10 w-full">
          <div className="">
          <div className="flex w-fit px-2 py-2 flex-wrap gap-2 mb-8 lg:bg-white lg:rounded-xl overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category
                      ? "bg-[#666666] bg-opacity-20 text-secondary"
                      : "bg-gray-300"
                  }`}
                  onClick={() => filterImages(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full ">
            {loading ? (
              <p className="px-4 py-20 lg:py-24 lg:px-10">
                Loading galleries...
              </p>
            ) : (
              <div className="w-full px-4 lg:px-10">
                {/* Category Filter */}

                <div>
                  <ParallaxScroll images={filteredImages} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
<VideoGridDemo/>
      <Footer />
    </div>
  );
};

export default GalleryPage;
