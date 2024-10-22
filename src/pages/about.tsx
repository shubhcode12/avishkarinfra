import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { AppleCardsCarouselDemo } from "@/components/common/Team";
import TextRevealByWord from "@/components/ui/TextReveal";
import Image from "next/image";
import avishkarFounder from "../../public/assets/images/about/avishkarFounder.jpeg";
import FaqSection from "@/components/Homesections/FaqSection";
import { AnimatedText } from "@/components/animations/Animatetext";
import TypingEffect from "@/components/animations/TypingEffect";
const About = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full flex py-28 justify-center px-0 lg:px-10">
        <div className="flex justify-center w-full">
          <div className="px-8 w-full">
            <div className="w-full">
              <TextRevealByWord text="Avishkar Infra is a distinguished name among real estate builders in Kolhapur, and it is known for spearheading numerous prestigious and iconic projects in the city. Our vision to exceed and our passion to excel drive us to push boundaries and set new standards in the industry." />
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-center py-32 w-full gap-8 bg-white">
              <div className="flex flex-col w-full gap-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm font-semibold">OUR FOUNDER</span>
                </div>
                <div className="text-4xl lg:text-5xl font-medium">
                <AnimatedText> 
                  The Visionary Behind Avishkar Infra
                  </AnimatedText> 
                </div>
                <div className="text-lg text-[#596460] pr-8">
                  Avishkar Infra was founded on a bold vision and passion for
                  creating exceptional living spaces. Our founder, Mr. Avinash
                  Jadhav, aimed to transform Kolhapur's landscape with projects
                  showcasing quality, innovation, and trust. With industry
                  experience, he pushed boundaries, setting a new standard for
                  regional real estate development. From humble beginnings, Mr.
                  Jadhav crafted iconic developments redefining Kolhapur's
                  luxury and lifestyle. Excellence and community-first thinking
                  drive every project.
                </div>
                <div className="bg-gray-400 h-[0.5px] w-full my-2"></div>

                <div className="text-lg text-secondary pr-8">
                  <h3 className="text-2xl font-semibold mb-4">
                  <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>
                    Our Vision
                    </TypingEffect>
                    </h3>
                  To become the most trusted and innovative real estate
                  developer in Kolhapur, setting new standards of excellence by
                  delivering premium-quality projects that enhance the city&apos;s
                  landscape and enrich the lives of its residents.
                </div>
                <div className="text-lg text-secondary pr-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    
                  <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>Our Mission
</TypingEffect>
</h3>
                  Our mission is to create high-quality, sustainable living
                  spaces that combine luxury with functionality. We aim to
                  exceed client expectations with every project by leveraging
                  cutting-edge construction techniques, fostering strong
                  relationships, and delivering homes that blend modern comfort
                  with community values. Our commitment is to positively impact
                  Kolhapur through transformative developments while maintaining
                  an unwavering focus on quality, trust, and environmental
                  responsibility.
                </div>
              </div>
              <div className="w-full ">
                <img
                  src={avishkarFounder.src}
                  className="w-full h-1/2 object-cover rounded-2xl aspect-video"
                  alt=""
                />
              </div>
            </div>

            <section className="w-full flex flex-col justify-center">
              <div className="flex justify-center w-full">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row w-full gap-8 mb-8">
                    <div className="flex flex-col lg:w-1/2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm font-semibold">OUR TEAM</span>
                      </div>
                      <div className="text-5xl lg:text-6xl font-medium mt-4">
                      <AnimatedText> 
                        Who drives the Avishkar Infra
                        </AnimatedText>
                      </div>
                    </div>
                    <div className="flex flex-col lg:text-end lg:justify-end">
                      <p className="text-lg text-[#596460] mb-4 max-w-2xl">
                        Get to know the dedicated professionals behind Avishkar Infrs
                        who are committed to helping you navigate the real
                        estate market with confidence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <AppleCardsCarouselDemo />
              </div>
            </section>
          </div>
        </div>
      </section>


      {/* <section className="w-full flex flex-col justify-center px-4 pt-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col gap-8">
              <div className="text-start max-w-3xl text-primary font-semibold text-4xl">
                Welcome to Avishkar Infra! Best builders and developers in
                Kolhapur
              </div>
            </div>
            <div className="text-secondary text-xl my-12 font-thin">
              Avishkar Infra is a distinguished name among real estate builders
              in Kolhapur, and it is known for spearheading numerous prestigious
              and iconic projects in the city. Our vision to exceed and our
              passion to excel drive us to push boundaries and set new standards
              in the industry. As the leading builders in Kolhapur, we leverage
              our extensive experience and deep knowledge to develop premium,
              high-quality real estate projects. Our commitment to quality
              construction is unwavering. We prioritize using top-tier materials
              and innovative techniques to ensure every project we undertake
              meets the highest standards of excellence. This dedication has not
              only enhanced our reputation but also established us as one of the
              most trusted land developers in Kolhapur. At Avishkar Infra, we
              believe in creating spaces that blend convenience with luxury. Our
              projects are thoughtfully designed to provide amenities that cater
              to modern lifestyles, ensuring our customers enjoy a comfortable
              and fulfilling living experience. Whether it&apos;s a premium
              bungalow or a large-scale development, we focus on every detail to
              deliver homes that our customers can be proud of. Our services
              encompass Design and Build, Construction Management, and the
              development of Premium Bungalows. Each service is tailored to meet
              the unique needs of our clients, ensuring a seamless and
              satisfying experience from concept to completion. Building on a
              foundation of quality and trust, Avishkar Infra continues to shape
              the skyline of Kolhapur, transforming visions into reality and
              setting benchmarks in real estate development. With every project,
              we strive to exceed expectations and contribute to the city's
              growth, reinforcing our position as a leader in the industry.
            </div>
          </div>
        </div>
      </section> */}

      <FaqSection />
      <Footer />
    </div>
  );
};

export default About;
