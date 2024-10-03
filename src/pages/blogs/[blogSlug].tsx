import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const blogSlug = () => {
  const router = useRouter();
  const { blogSlug } = router.query;
  const [post, setpost] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `https://avishkar.giantwheeltech.com/wp-json/wp/v2/posts/${blogSlug}`
        );
        const fetchedPosts = {
          id: response?.data?.id,
          date: response?.data?.date,
          date_gmt: response?.data?.date_gmt,
          slug: response?.data?.slug,
          status: response?.data?.status,
          link: response?.data?.link,
          title: response?.data?.title.rendered,
          content: response?.data?.content.rendered,
          excerpt: response?.data?.excerpt.rendered,
          author: response?.data?.author,
          featured_media: response?.data?.featured_media,
          featured_media_src_url: response?.data?.featured_media_src_url,
          categories: response?.data?.categories,
          tags: response?.data?.tags,
          class_list: response?.data?.class_list,
        };
        setpost(fetchedPosts);
        console.log("fetched posts : " + fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [blogSlug]);
  return (
    <div className="">
      <Navbar />
      <section className="w-full flex py-14 pt-28 lg:pt-40 justify-center px-4 lg:px-10 ">
        <div className="flex justify-center w-full">
          <div className="px-8 w-full">
            <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
              <div className="flex flex-col w-full">
                <div className="text-4xl lg:text-5xl font-medium mt-4">
                  {post?.title}
                </div>
                <div className="flex flex-row gap-8 py-6">
                  <div className="flex items-center mt-3">
                    <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-semibold">
                      {post?.categories}
                    </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <div className="w-4 h-4 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm font-semibold">{post?.date}</span>
                  </div>
                </div>

                <div className="p-0 text-secondary font-semibold">
                  <Markdown rehypePlugins={[rehypeRaw]}>
                    {post?.content}
                  </Markdown>
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-auto">
                <img
                  src={post?.featured_media_src_url}
                  className="w-full h-auto rounded-lg"
                  alt={post?.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default blogSlug;
