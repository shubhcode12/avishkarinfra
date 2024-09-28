import React from "react";
import { Button } from "../ui/button";
import { common } from "../../../public/assets/icon";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import faqData from "@/data/static_content";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <AccordionItem value={question}>
    <AccordionTrigger className="text-start">{question}</AccordionTrigger>
    <AccordionContent className="text-start">{answer}</AccordionContent>
  </AccordionItem>
);

const FaqSection = () => {
  return (
    <section className="w-full flex py-28 justify-center px-2 lg:px-12">
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex justify-center w-full gap-8">
            <div className="flex flex-col lg:flex-row w-full gap-8">
              <div className="flex flex-col w-full gap-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                  <span className="text-sm font-semibold">FAQ</span>
                </div>
                <div className="text-6xl font-semibold text-secondary">
                  Frequently asked question?
                </div>
                <div className="text-lg text-[#596460] max-w-lg">
                  Here are some important questions that are frequently asked
                  and the answers to the questions.
                </div>
                <div className="text-secondary font-semibold text-xl">
                  Have a different question?
                </div>
                <div>
                  <Button className="flex justify-center gap-2">
                    <span>Contact Us</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="w-full">
                <Accordion type="single" collapsible>
                  {faqData.map(({ question, answer }) => (
                    <FaqItem
                      key={question}
                      question={question}
                      answer={answer}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
