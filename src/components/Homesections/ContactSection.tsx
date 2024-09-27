import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconClockFilled,
    IconFileBroken,
    IconLocationFilled,
    IconMapPinFilled,
    IconPhoneFilled,
    IconSend,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import BackgroundVideo from "@/components/common/BGVideo";
import { StickyScrollRevealDemo } from "@/components/common/Sticky";
import { FollowingPointerDemo } from "@/components/common/BlogCard";
import { Button } from '../ui/button';
const ContactSection = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="px-8 w-full ">
            <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col lg:flex-row w-full gap-20">
                <div className="w-full">
                  <Card className="w-full">
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4 mt-8">
                          <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                placeholder="Name of your project"
                              />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Phone Number</Label>
                              <Input
                                id="phone"
                                placeholder="Enter Phone Number"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" type="email" placeholder="email" />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">
                              What is your enquiry about?*
                            </Label>
                            <Select>
                              <SelectTrigger id="framework">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                <SelectItem value="next">Next.js</SelectItem>
                                <SelectItem value="sveltekit">
                                  SvelteKit
                                </SelectItem>
                                <SelectItem value="astro">Astro</SelectItem>
                                <SelectItem value="nuxt">Nuxt.js</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Additional information</Label>
                            <Textarea id="name" placeholder="Your message" />
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-center lg:justify-start">
                      <Button>Send Message</Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="w-full">
                  <div className="flex flex-col w-full gap-8">
                    <div className="text-3xl font-semibold text-secondary">
                      Get in touch to schedule a visit to your new house.
                    </div>
                    <div className="text-secondary">
                      Kindly fill this form with your details about your
                      inquiries and we would respond your inquiry shortly.
                    </div>
                    <div className="bg-[#ADADAD] h-[0.5px] w-full"></div>
                    <div className="flex flex-col w-full gap-4">
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconLocationFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Send an email</div>
                          <div className="text-primary">contact@ecohavenrealty.com</div>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconPhoneFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Give us a call</div>
                          <div className="text-primary">+234905 121 8127</div>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconMapPinFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Office address</div>
                          <div className="text-primary">11,Odo-Olowu, Ijeshatedo B/Stop, Surulere</div>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-2">
                        <div>
                          <IconClockFilled className="text-primary mt-1" />
                        </div>
                        <div>
                          <div className="text-xl">Working hours</div>
                          <div className="text-primary">Mon - Sat: 10am - 4pm</div>
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
  )
}

export default ContactSection
