import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://images.unsplash.com', ],
    loader: 'akamai',
    path: '',
    unoptimized : true
  },
};

export default withNextVideo(nextConfig);