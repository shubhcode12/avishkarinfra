import { AnimatedText } from "@/components/animations/Animatetext";
import TypingEffect from "@/components/animations/TypingEffect";
import CTA from "@/components/common/CTA";
import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SocialMediaList from "@/components/common/SocialMediaList";
import { Button } from "@/components/ui/button";
import { contactus, sociallinks } from "@/data/static_content";
import { Link } from "lucide-react";
const Contactus = () => {
  const handleMailClick = (mail: string) => {
    window.location.href = `mailto:${mail}?subject=Hello&body=This is the email body.`;
  };
  const handleCallClick = (phone: string) => {
    window.location.href = `tel:+91${phone}`;
  };
  return (
    <div>
      <Navbar />
      <div className="">
      <section className="w-full flex flex-col bg-[#f7f7f7] justify-center pt-32 lg:pt-52 pb-28 lg:px-10">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col lg:flex-row w-full gap-20">
                <div className="w-full flex flex-col gap-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-semibold">CONTACT US</span>
                  </div>
                  <div className="text-[3.4rem] lg:text-6xl font-semibold max-w-[23rem]">
                    <AnimatedText>

                    Let&apos;s make an action plan
                    </AnimatedText>
                  </div>
                  <div className="text-xl max-w-[28rem]">
                    Don&apos;t like the form? Leave a message via email{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => handleMailClick(contactus.email[0])}>
                      {contactus.email[0]}
                    </span>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex w-full flex-col lg:flex-row items-stretch">
          <div className="flex flex-col gap-4 bg-white px-8 py-14 border-b-1 border-t border-l border-b border-gray-600 flex-1">
            <div className="text-xl font-semibold">
                
            <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>
              Office Address
              
              </TypingEffect>
              </div>
            <div className="text-lg">{contactus.address}</div>
          </div>
          <div className="flex flex-col gap-4 bg-white px-8 py-14 border-b-1 border-t border-l border-b border-gray-600 flex-1">
            <div className="text-xl font-semibold">
                
            <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>
              Call Us</TypingEffect></div>
            <div className="text-lg">
              {contactus.phone.map((phone, index) => (
                <div key={index} onClick={() => handleCallClick(phone)}>
                  {phone}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white px-8 py-14 border-b-1 border-t border-l border-b border-gray-600 flex-1">
            <div className="text-xl font-semibold">  
                  <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>Email Us</TypingEffect></div>
            <div className="underline">
              {contactus.email.map((mail, index) => (
                <div key={index} onClick={() => handleMailClick(mail)}>
                  {mail}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white px-8 py-14 border-b-1 border-t border-l border-b border-r border-gray-600 flex-1">
            <div className="text-xl font-semibold">  
                  <TypingEffect 
  typingSpeed={100}
  deletingSpeed={50}
  delayBetweenTexts={2000}
  loop={true}
  cursorChar="|"
>Follow Us</TypingEffect></div>
            <SocialMediaList />
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
      </div>
    </div>
  );
};

export default Contactus;
