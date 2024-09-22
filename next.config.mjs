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

export default nextConfig;
