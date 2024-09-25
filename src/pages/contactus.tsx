import Navbar from '@/components/common/Navbar'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
const Contactus = () => {
    const handleMailClick = () => {
        window.location.href = 'mailto:example@example.com?subject=Hello&body=This is the email body.';
      };
  return (
    <div>
      <Navbar/>
      <section className="w-full flex flex-col bg-[#999999] bg-opacity-20 justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
          <div className="flex justify-center w-full gap-8">
              <div className="flex flex-col lg:flex-row w-full gap-20">
                <div className="w-full flex flex-col gap-8">
                    <div>
                        <Button>Contact us</Button>
                    </div>
                    <div className='text-6xl font-semibold max-w-[23rem]'>
                    Let&apos;s make an action plan
                    </div>
                    <div className='text-xl max-w-[28rem]'>
                    Don&apos;t like the form? Leave a message via email <span className='underline cursor-pointer' onClick={handleMailClick}>info@samaramars.com</span>
                    
                    </div>
                </div>
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
                </div>
                </div>
                </div>
                
            </div>
           
            </section>
            <section className="w-full flex flex-col justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
          <div className="flex justify-center items-center w-full gap-8">
            <div className='flex justify-end w-7/8'>

            <div className='text-4xl'>
            Are you interested in a property or
            have any other inquiries?
            </div>
            </div>
            <div className="w-2/3">

            <div className='rounded-full w-48 h-48 flex justify-center items-center  border-2 border-gray-700'>
            Contact Us
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
    </div>
  )
}

export default Contactus
