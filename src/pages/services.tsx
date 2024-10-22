import CTA from "@/components/common/CTA";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Premium_Bunglaow from "../../public/assets/images/services/Premium_Bunglaow.jpg";
import NA_Plots from "../../public/assets/images/services/NA_Plots.jpg";
import Affordable_Flats from "../../public/assets/images/services/Affordable_Flats.jpg";
import Luxury_flats from "../../public/assets/images/services/Luxury_flats.jpg";
import Farm_House from "../../public/assets/images/services/Farm_House.jpg";
import Commercial_Spaces from "../../public/assets/images/services/Commercial_Spaces.jpg";
import TypingEffect from "@/components/animations/TypingEffect";
import { AnimatedText } from "@/components/animations/Animatetext";

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  featImage: string;
}

const data = [
  {
    number: 1,
    title: "Premium Bungalows",
    description:
      "Discover a new level of luxury with our expertly designed Premium Bungalows, where elegance meets comfort in every corner. Located in the heart of Kolhapur and across Maharashtra, our bungalows are more than just homes; they are a statement of refined living. Each bungalow is thoughtfully crafted, ensuring that every detail speaks of sophistication and exclusivity. From sprawling living spaces to meticulously landscaped gardens, these bungalows offer a serene retreat from the bustling city life.",
    featImage: Premium_Bunglaow.src,
  },
  {
    number: 2,
    title: "NA Plot",
    description:
      "Unlock the potential of your dream home with our NA Plots, strategically located in Kolhapur and other prime areas of Maharashtra. These legally approved plots are ready for construction, offering you the freedom to design and build a home that reflects your unique style and needs. Whether you are an investor looking to capitalize on the booming real estate market or a homeowner with a vision, our NA Plots provide the perfect canvas for your ambitions.",
    featImage: NA_Plots.src,
  },
  {
    number: 3,
    title: "Affordable Flats",
    description:
      "Experience the perfect blend of quality and affordability with our Affordable Flats in Kolhapur and Maharashtra. Designed to cater to the needs of budget-conscious buyers, these apartments do not compromise on comfort or style. We believe that everyone deserves a home that they can be proud of, and our Affordable Flats are a testament to that commitment.",
    featImage: Affordable_Flats.src,
  },
  {
    number: 4,
    title: "Premium Flats",
    description:
      "Indulge in upscale living with our Premium Flats, where luxury and modernity converge to create an exceptional residential experience. Located in prime areas of Kolhapur and Maharashtra, these apartments are designed for those who appreciate the finer things in life. From stunning architecture to high-end finishes, every aspect of our Premium Flats exudes elegance and sophistication.",
    featImage: Luxury_flats.src,
  },
  {
    number: 5,
    title: "Commercial Spaces",
    description:
      "Position your business for success with our versatile and strategically located Commercial Spaces in Kolhapur and across Maharashtra. Whether you are an entrepreneur starting a new venture or an established business looking to expand, our commercial properties are designed to meet a wide range of business needs. From retail shops to office spaces, we offer flexible options that can be tailored to your specific requirements.",
    featImage: Commercial_Spaces.src,
  },
  {
    number: 6,
    title: "Farm House Plots",
    description:
      "Escape the hustle of city life and immerse yourself in the serene beauty of nature with our Farm House Plots. Located in scenic areas around Kolhapur and Maharashtra, these plots are ideal for second homes, farmhouses, or even agricultural ventures. Surrounded by lush greenery and peaceful landscapes, our Farm House Plots offer the perfect setting for a weekend retreat or a permanent residence away from the urban grind.",
    featImage: Farm_House.src,
  },
];
const ServiceItem: React.FC<ServiceItemProps> = ({
  number,
  title,
  description,
  featImage,
}) => (
  <div className="w-full">
    <div className="flex justify-center gap-2 items-center">
      <div className="border-primary border-2 p-2 text-xl rounded">
        {number}
      </div>
      <div className="w-full h-1 bg-primary rounded"></div>
    </div>
    <div>
    <div className="text-secondary mt-4 text-lg font-semibold">
      <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>
        {title}
        </TypingEffect>
        </div>
      <div className="text-secondaryLight text-md">{description}</div>
    </div>
    <div>
      <img
        src={featImage}
        alt={title}
        className="group w-full overflow-hidden aspect-square rounded-lg border border-neutral-100 mt-4"
      />
    </div>
  </div>
);

const services = () => {
  return (
    <div>
      <Navbar />

      <section className="w-full flex pt-36 py-28 justify-center px-0 lg:px-10">
        <div className="flex justify-center w-full">
          <div className="px-8 w-full">
            <div className="flex flex-col lg:w-1/2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                <span className="text-sm font-semibold">SERVICES</span>
              </div>
              <div className="text-[2.5rem] lg:text-5xl font-medium mt-4">
              <AnimatedText> 
                Services Tailored to Exceed Your Every Need
                </AnimatedText> 
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 justify-center">
              {data.map((service) => (
                <ServiceItem
                  key={service.number}
                  number={service.number.toString().padStart(2, "0")}
                  title={service.title}
                  description={service.description}
                  featImage={service.featImage}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
};

export default services;