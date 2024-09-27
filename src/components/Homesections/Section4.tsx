import React from 'react'
import { CardHoverEffectDemo } from '../common/Goal'
import { Button } from '../ui/button'
import { common } from '../../../public/assets/icon'
import Image from 'next/image'
const Section4 = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0 bg-secondary rounded-3xl hero-banner">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full ">
            <div className="flex flex-col gap-8 lg:flex-row justify-center lg:justify-between  items-end w-full">
<div className="text-white font-semibold text-5xl max-w-3xl">
Where Innovation, Sustainability, 
and Community Meet
</div>
<div className="flex justify-center w-full lg:w-auto">
<Button className="flex justify-center w-auto gap-2">
                    <span>View All Properties</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
</div>
            </div>
            <div className="mt-12 lg:mt-24">

            <CardHoverEffectDemo/>
            </div>
          </div>
          </div>
          </section>
  )
}

export default Section4
