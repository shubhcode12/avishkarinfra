import React, { useEffect, useState } from 'react'
import { FollowingPointerDemo } from '../common/BlogCard'

const Section7 = () => {
  const [loading, setLoading] = useState(true); // to manage loading state
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    // Fetch data from your API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/posts'); // adjust the path if needed
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
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

                      {posts.map((item: any) => (
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
