import React from 'react'
import { Button } from '../ui/button'
import { common } from '../../../public/assets/icon'
import Image from 'next/image'

const Homefinal = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center  ">
        <div className="flex justify-center w-full ">
          <div className="px-8 w-full  ">
            <div className="flex justify-center w-full rounded-3xl gap-8 bg-[url('../../public/assets/images/home/CTA.png')] bg-cover lg:bg-cover bg-no-repeat">
              <div className="flex flex-col gap-4 py-4 px-10 my-24 bg-white rounded-3xl">
                <div className="text-secondary font-semibold text-3xl text-center max-w-md">Ready to find your eco-friendly home? </div>
                <div className="text-secondary font-semibold text-center max-w-xl">We have homes in 20+ cities across the country to choose from!</div>
                <div className="flex justify-center">

                <Button className="flex justify-center !w-auto gap-2">
                    <span>Browse homes</span>
                    <span>
                      <Image src={common.arrowCrossRight} alt="" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
  )
}

export default Homefinal
