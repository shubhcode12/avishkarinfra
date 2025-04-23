import Navbar from "@/components/common/Navbar";
import React from "react";
import Premium_Bunglaow from "../../public/assets/images/services/Premium_Bunglaow.jpg";
import NA_Plots from "../../public/assets/images/services/NA_Plots.jpg";
import Affordable_Flats from "../../public/assets/images/services/Affordable_Flats.jpg";
import Luxury_flats from "../../public/assets/images/services/Luxury_flats.jpg";
import Farm_House from "../../public/assets/images/services/Farm_House.jpg";
import Commercial_Spaces from "../../public/assets/images/services/Commercial_Spaces.jpg";
import icon1 from "../../public/assets/images/services/1.png";
import icon2 from "../../public/assets/images/services/2.png";
import icon3 from "../../public/assets/images/services/3.png";
import icon4 from "../../public/assets/images/services/4.png";
import icon5 from "../../public/assets/images/services/5.png";
import Link from "next/link";

export default function Service() {
  const data = [
    {
      number: 1,
      title: "Premium Bungalows",
      description:
        "Discover a new level of luxury with our expertly designed Premium Bungalows, where elegance meets comfort in every corner. Located in the heart of Kolhapur and across Maharashtra, our bungalows are more than just homes; they are a statement of refined living.",
      featImage: Premium_Bunglaow.src,
      icon: icon1,
      link: "/properties?type=bungalow",
    },
    {
      number: 2,
      title: "NA Plot",
      description:
        "Unlock the potential of your dream home with our NA Plots, strategically located in Kolhapur and other prime areas of Maharashtra. These legally approved plots are ready for construction, offering you the freedom to design and build a home that reflects your unique style and needs.",
      featImage: NA_Plots.src,
      icon: icon2,
      link: "/properties?type=plot",
    },
    {
      number: 3,
      title: "Affordable Flats",
      description:
        "Experience the perfect blend of quality and affordability with our Affordable Flats in Kolhapur and Maharashtra. Designed to cater to the needs of budget-conscious buyers, these apartments do not compromise on comfort or style.",
      featImage: Affordable_Flats.src,
      icon: icon3,
      link: "/properties?type=affordable",
    },
    {
      number: 4,
      title: "Premium Flats",
      description:
        "Indulge in upscale living with our Premium Flats, where luxury and modernity converge to create an exceptional residential experience. Located in prime areas of Kolhapur and Maharashtra, these apartments are designed for those who appreciate the finer things in life.",
      featImage: Luxury_flats.src,
      icon: icon3,
      link: "/properties?type=premium",
    },
    {
      number: 5,
      title: "Commercial Spaces",
      description:
        "Position your business for success with our versatile and strategically located Commercial Spaces in Kolhapur and across Maharashtra. Whether you are an entrepreneur starting a new venture or an established business looking to expand.",
      featImage: Commercial_Spaces.src,
      icon: icon4,
      link: "/properties?type=commercial",
    },
    {
      number: 6,
      title: "Farm House Plots",
      description:
        "Escape the hustle of city life and immerse yourself in the serene beauty of nature with our Farm House Plots. Located in scenic areas around Kolhapur and Maharashtra, these plots are ideal for second homes, farmhouses, or even agricultural ventures.",
      featImage: Farm_House.src,
      icon: icon5,
      link: "/properties?type=farmhouse",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
        <div className="flex items-center gap-2 text-sm py-10">
          <Link href="/" className="text-gray-500 hover:text-primary">
            HOME
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-primary">SERVICES</span>
        </div>
      </div>

      {/* Services Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {data.map((service, index) => (
              <div
                key={service.number}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative w-full overflow-hidden rounded-lg">
                    <img
                      src={service.featImage}
                      alt={service.title}
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#ef7f1a] rounded-lg flex items-center justify-center">
                      <img
                        src={service.icon.src}
                        alt={`${service.title} icon`}
                        className="w-full"
                      />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-flex items-center text-[#ef7f1a] font-semibold group">
                    View Properties
                    <svg
                      className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
