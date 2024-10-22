import { AnimatedText } from '@/components/animations/Animatetext';
import { FollowingPointerDemo } from '@/components/common/BlogCard'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React, { useEffect, useState } from 'react'

const CategoryButton = ({ category, selectedCategory, onClick }: any) => (
    <button
      key={category.id || category}
      onClick={() => onClick(category.name || category)}
      className={`px-4 py-2 rounded-full text-sm ${
        category.name === selectedCategory || category === selectedCategory
          ? "bg-[#ef7f1a] text-white"
          : "bg-white text-black border border-gray-300"
      }`}>
      {category.name || category}
    </button>
  );

  
const blogs = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true); 
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts"); 
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
    const fetchCategories = async () => {
        try {
          const response = await fetch(
            "https://avishkar.giantwheeltech.com/wp-json/wp/v2/post_category"
          );
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
      
    fetchCategories();
  }, []);
  const filterPosts = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (categoryName === "All") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.category && post.category.includes(categoryName)
      );
      setFilteredPosts(filtered);
    }
  };
  
  return (
    <div>
      <Navbar/>
      <section>
        <section className="w-full flex pt-36 py-28 justify-center px-2 lg:px-10">
          <div className="flex justify-center w-full">
            <div className="px-8 w-full ">
              <div className="flex justify-center w-full">
                <div className="flex flex-col w-full">
                <div className="flex text-center justify-center text-5xl font-semibold lg:mt-12">
                  <AnimatedText> 
                    Our latest news and articles.
                    </AnimatedText> 
                  </div>

                  <div className="text-center text-[#596460] mt-6">
                    Explore our latest news and articles to stay informed about<br/>
                    the latest trends and insights in the real estate market.
                  </div>
                  <div className="flex  px-2 py-2 justify-center w-full gap-2 mb-8 lg:bg-white lg:rounded-full ">
            {/* All Button */}
            <CategoryButton
              category="All"
              selectedCategory={selectedCategory}
              onClick={filterPosts}
            />
            {/* Dynamic Category Buttons */}
            {/* {categories && categories?.map((category: any) => (
              <CategoryButton
                key={category.id}
                category={category}
                selectedCategory={selectedCategory}
                onClick={filterPosts}
              />
            ))} */}
          </div>
                  <div className="w-full mt-12">
                    <div className="w-full ">
                      <div className="grid grid-cols-1 lg:grid-cols-4">
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
      <Footer/>
    </div>
  )
}

export default blogs
