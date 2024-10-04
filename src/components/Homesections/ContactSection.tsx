import {
  IconClockFilled,
  IconLocationFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";

import ContactForm from "../common/ContactForm";
const ContactSection = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center px-2 lg:px-10">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full ">
          <div className="flex justify-center w-full gap-8">
            <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-20">
              <ContactForm />

              <div className="w-full md:mt-10 lg:mt-0">
                <div className="flex flex-col w-full gap-8">
                  <div className="text-6xl font-semibold text-secondary">
                    Get in touch
                  </div>
                  <div className="text-lg text-[#596460] max-w-lg">
                    Kindly fill this form with your details about your inquiries
                    and we would respond your inquiry shortly.
                  </div>
                  <div className="bg-[#ADADAD] h-[0.5px] w-full"></div>
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex justify-start items-start gap-2">
                      <div>
                        <IconLocationFilled className="text-primary mt-1" />
                      </div>
                      <div>
                        <div className="text-xl font-medium">Send an email</div>
                        <div className="text-primary">
                          contact@avishkarinfra.com
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                      <div>
                        <IconPhoneFilled className="text-primary mt-1" />
                      </div>
                      <div>
                        <div className="text-xl font-medium">
                          Give us a call
                        </div>
                        <div className="text-primary">+91 7276080909</div>
                      </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                      <div>
                        <IconMapPinFilled className="text-primary mt-1" />
                      </div>
                      <div>
                        <div className="text-xl font-medium">
                          Office address
                        </div>
                        <div className="text-primary">
                          Office No.Fi 01 5th floor, Business Bay Building,
                          Tarabai Park, Kolhapur
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-start gap-2">
                      <div>
                        <IconClockFilled className="text-primary mt-1" />
                      </div>
                      <div>
                        <div className="text-xl font-medium">Working hours</div>
                        <div className="text-primary">
                          Mon - Sat: 10am - 5pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
