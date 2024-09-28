import React from 'react'
import { common } from '../../../public/assets/icon'
import Image from 'next/image'
const ExperienceCounts = () => {
  return (
    <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0 ">
    <div className="flex justify-center w-full">
      <div className="px-8 w-full ">
        <div className="flex justify-center w-full gap-8">
          <div className="flex flex-col w-full gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:justify-start items-center lg:items-start">
              <div className="flex  flex-col justify-center lg:justify-start gap-4 item-center lg:items-start ">
                <div className="flex lg:gap-4 justify-center lg:justify-start items-end">
                  <div className="text-7xl">10</div>
                  <div>
                    <Image src={common.plus} alt="" />
                  </div>
                </div>
                <div className="text-secondaryLight text-lg font-semibold text-opacity-50 text-center lg:text-start">
                  Awards Gained
                </div>
              </div>

              <div className="flex  flex-col justify-center lg:justify-start gap-4 item-center lg:items-start">
                <div className="flex lg:gap-4 justify-center lg: justify-start items-end">
                  <div className="text-7xl">20</div>
                  <div>
                    <Image src={common.plus} alt="" />
                  </div>
                </div>
                <div className="text-secondaryLight text-lg font-semibold text-opacity-50 text-center lg:text-start">
                  Years of Experience
                </div>
              </div>

              <div className="flex  flex-col justify-center lg:justify-start gap-4 item-center lg:items-start">
                <div className="flex lg:gap-4 justify-center lg: justify-start items-end">
                  <div className="text-7xl">598</div>
                  <div>
                    <Image src={common.plus} alt="" />
                  </div>
                </div>
                <div className="text-secondaryLight text-lg font-semibold text-opacity-50 text-center lg:text-start">
                  Rented Home Stay
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto lg:w-2/3"></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ExperienceCounts
