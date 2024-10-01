import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const VideoGrid = ({ videos }:any) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Property Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video:any, index:any) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div>
                <iframe src="https://www.youtube.com/embed/SVp8IFi_t80"></iframe>
               
              </div>
            </CardContent>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const sampleVideos = [
  {
    title: "Luxurious Beachfront Villa",
    description: "Take a tour of this stunning 5-bedroom villa with panoramic ocean views."
  },
  {
    title: "Modern Downtown Loft",
    description: "Explore this spacious loft in the heart of the city, perfect for urban living."
  },
  {
    title: "Charming Suburban Family Home",
    description: "Discover this lovely 4-bedroom house with a large backyard and modern amenities."
  },
  {
    title: "Rustic Mountain Retreat",
    description: "Experience the tranquility of this cozy cabin nestled in the mountains."
  },
  {
    title: "Elegant City Penthouse",
    description: "View this luxurious penthouse with breathtaking city skyline views."
  },
  {
    title: "Waterfront Property Tour",
    description: "See this unique property with private dock access and stunning water views."
  }
];

const VideoGridDemo = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <VideoGrid videos={sampleVideos} />
    </div>
  );
};

export default VideoGridDemo;