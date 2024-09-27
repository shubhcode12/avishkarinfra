import React from 'react'
import { Button } from '../ui/button'
import { common } from '../../../public/assets/icon'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
const Section8 = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="px-8 w-full ">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col lg:flex-row w-full gap-8">
                <div className="flex flex-col w-full gap-8">
                  <div className="w-full flex justify-start items-center gap-4">
                    <div className="">
                      <svg
                        width="60"
                        height="2"
                        viewBox="0 0 60 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="1"
                          y1="1"
                          x2="59"
                          y2="1"
                          stroke="#F58634"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>

                    <div className="w-full text-primary text-xl font-semibold">
                      FREQUENTLY ASKED QUESTIONS
                    </div>
                  </div>
                  <div className="text-4xl font-semibold text-secondary">
                    Common questions asked about our Avishkar Infra.
                  </div>
                  <div className="text-lg">
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
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What makes EcoHaven Realty different from other real
                        estate agencies?
                      </AccordionTrigger>
                      <AccordionContent>
                        At EcoHaven Realty, we are committed to promoting
                        sustainability in the real estate industry. We
                        prioritize eco-friendly practices, such as green
                        building techniques and energy-efficient systems, in all
                        of our transactions. We believe that promoting
                        environmental responsibility is not only the right thing
                        to do, but it also benefits our clients by providing
                        long-term cost savings and a healthier living
                        environment.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Do you only work with eco-friendly properties?
                      </AccordionTrigger>
                      <AccordionContent>
                        While we specialize in promoting and selling
                        eco-friendly properties, we work with all types of
                        properties. Our focus is on promoting sustainable
                        practices and educating our clients on how they can make
                        their properties more eco-friendly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Can you help me find an eco-friendly property?
                      </AccordionTrigger>
                      <AccordionContent>
                        Absolutely! We have a database of eco-friendly
                        properties and can work with you to find a property that
                        aligns with your sustainability goals. Additionally, we
                        can provide guidance on how to make any property more
                        eco-friendly.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        What is your process for ensuring a property is
                        eco-friendly?
                      </AccordionTrigger>
                      <AccordionContent>
                        We work with builders and contractors who specialise in
                        eco-friendly building practices. We also conduct
                        assessments of a property's energy and water usage, as
                        well as its overall sustainability features, to ensure
                        that it aligns with our eco-friendly standards.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        Are eco-friendly properties more expensive?
                      </AccordionTrigger>
                      <AccordionContent>
                        Not necessarily. While some eco-friendly features may
                        require an initial investment, such as solar panels or
                        energy-efficient systems, they can ultimately lead to
                        long-term cost savings on utility bills. Additionally,
                        there are often government incentives and tax breaks
                        available for eco-friendly properties and features.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section8
