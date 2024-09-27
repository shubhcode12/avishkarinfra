import React from 'react'
import { FollowingPointerDemo } from '../common/BlogCard'
const blogContents = [
    {
      slug: "amazing-tailwindcss-grid-layouts",
      author: "Manu Arora",
      date: "28th March, 2023",
      title: "Amazing Tailwindcss Grid Layout Examples",
      description:
        "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
      image: "aboutscreen.aboutHero",
      authorAvatar: "/manu.png",
    },
    {
      slug: "responsive-design-with-flexbox",
      author: "Jane Doe",
      date: "15th April, 2023",
      title: "Mastering Responsive Design with Flexbox",
      description:
        "Learn how to create flexible and responsive layouts using CSS Flexbox and Tailwindcss in this detailed guide.",
      image: "flexbox-tutorial.image",
      authorAvatar: "/jane.png",
    },
    {
      slug: "nextjs-performance-optimization",
      author: "John Smith",
      date: "2nd May, 2023",
      title: "Boosting Performance in Next.js Applications",
      description:
        "Explore various techniques to optimize performance in Next.js applications, ensuring faster load times and better user experience.",
      image: "nextjs.performanceImage",
      authorAvatar: "/john.png",
    },
  ];
const Section7 = () => {
  return (
    <div>
        <section>
        <section className="w-full flex pt-12 pb-24 justify-center px-4 lg:px-0">
          <div className="flex justify-center w-full">
            <div className="px-8 w-full ">
              <div className="flex justify-center w-full gap-8">
                <div className="flex flex-col w-full gap-8">
                  <div className="flex justify-center text-3xl font-semibold">
                    Benefits of owning an eco-friendly home.
                  </div>

                  <div className="text-center">
                    High-quality homes with low-carbon impact.
                  </div>
                  <div className="max-w-6xl">
                    <div className="w-full ">
                   
                      <div className="grid grid-cols-1 lg:grid-cols-3">

                      {blogContents.map((item: any) => (
                        <FollowingPointerDemo key={item.slug} content={item} />
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Section7
