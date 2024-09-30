import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import { HeroParallax } from '@/components/ui/hero-parallax'
import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from '@/models/gallery';

const gallery = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get<Gallery[]>('/api/gallery');
        setGalleries(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching galleries:', error);
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  const images = galleries.flatMap(gallery => 
    gallery.images.flat().map((image: { title: any; full_image_url: any; thumbnail_image_url: any }) => ({
      title: image.title,
      link: image.full_image_url,
      thumbnail: image.full_image_url
    }))
  );

  return (
    <div>
      <Navbar/>
      <section className="w-full flex flex-col justify-center px-4 py-24 lg:px-0">
        <div className="flex justify-center w-full">
          <div className="max-w-6xl w-full">
            {loading ? (
              <p>Loading galleries...</p>
            ) : (
              <HeroParallax products={images} />
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default gallery
