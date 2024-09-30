import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { useRouter } from 'next/router'
import React from 'react'

const BlogSlug = () => {
  const router = useRouter()
  const { BlogSlug } = router.query  ;
  return (
    <div className=''>
      <Navbar/>
      <div className="py-96">
        hi
      </div>
      <Footer/>
    </div>
  )
}

export default BlogSlug
