import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const blogSlug = () => {
  const router = useRouter()
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
              // acf: response?.data?.acf || null, // if no acf field is available, default to null
            };
            setpost(fetchedPosts);
          } catch (error) {
            console.error("Error fetching posts:", error);
          } finally {
            setLoading(false);
        }
      };
      
      fetchPostData();
    }, [blogSlug]);
  return (
    <div className=''>
      <Navbar/>
      <div className="flex flex-col items-center justify-center w-full pt-28">
        <div className='w-full flex justify-center items-center'>
          <div className="max-w-4xl">

        <div className='text-6xl font-semibold text-center'>{post?.title}</div>
          </div>
        </div>
        <div className='w-full'>
<Image src={post?.featured_media_src_url} className='w-full' alt='' width={100} height={100}/>
        </div>
        <div className='p-8'>
          <div className="flex w-full justify-center gap-4">

        {
          post?.tags?.map((item:any)=>

            <div className='bg-[#666666]  text-white rounded p-1'>
            <span className='font-bold'># </span>{item}
          </div>
          )
        }
        </div>
        </div>
        <div className="p-8 text-secondary font-semibold">

        <Markdown rehypePlugins={[rehypeRaw]}>
{post?.content}
        </Markdown>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default blogSlug
