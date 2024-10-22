import React, { useEffect, useState } from "react";
import { FollowingPointerDemo } from "../common/BlogCard";
import { AnimatedText } from "../animations/Animatetext";

const BlogSection = () => {
  const [loading, setLoading] = useState(true); // to manage loading state
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    // Fetch data from your API
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/posts"); // adjust the path if needed
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
        <section className="w-full flex py-28 justify-center px-0 lg:px-10">
          <div className="flex justify-center w-full">
            <div className="px-6 lg:px-8 w-full ">
              <div className="flex justify-center w-full">
                <div className="flex flex-col w-full">
                <div className="flex text-center justify-center text-5xl font-semibold">
                  <AnimatedText> 
                    Our latest news and articles.
                    </AnimatedText>
                  </div>


                  <div className="text-center text-[#596460] mt-6">
                    Explore our latest news and articles to stay informed about<br/>
                    the latest trends and insights in the real estate market.
                  </div>
                  <div className="max-w-6xl mt-12">
                    <div className="w-full ">
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        {posts.map((item: any) => (
                          <FollowingPointerDemo
                            key={item.slug}
                            content={item}
                          />
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
  );
};

export default BlogSection;
