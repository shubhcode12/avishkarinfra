import React from "react";
import PropertyListing from "../components/RealEstate/PropertyListing";
import Head from "next/head";

const NandiniJadhavNagar: React.FC = () => {
  // Project data for Nandini Jadhav Nagar
  const propertyData = {
    title: "Avishkar Infra",
    subtitle: "Nandini Jadhav Nagar - N.A. Open Plots",
    location: "Kalambe Turf Thane, Kolhapur 416001",
    totalPrice: 0, // Contact to Builder
    propertyArea: 1000, // Min area
    builtUpArea: 1000, // Max area
    attributes: [
      { name: "NA Open Plots" },
      { name: "130 Total Units" },
      { name: "30 Available Units" },
      { name: "1000 Sq.Ft Area" },
      { name: "Price Excluding Other Charges" },
    ],
    images: [
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-f464fa2a58d645412886dee.png",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-8d9424082141123b0f3acbf.png",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-0a64e0986ff4d6afe8a3748.png",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-05d4dbcb8d1b3dccc8660a8.png",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-10345e384736c82130ab310.png",      
    ],
    agentName: "Vishal Khade / Harish Makandar",
    agentPhone: "+917276080909 / +919665555474",
    agentCompany: "Avishkar Infra",
    agentImageUrl:
      "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    companyLogoUrl:
      "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    officeAddress: "Gaurinandan, Kalamba Ring Road, Kolhapur - 416003",
    website: "https://avishkarinfra.com/",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4479.996793224376!2d74.204795!3d16.630252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0557795c483a3%3A0xa210e2e3c7476b7!2sGanpatrao%20Chogule%20School!5e1!3m2!1sen!2sin!4v1744466823618!5m2!1sen!2sin",
    amenities: [
      {
        title: "Location Advantages",
        items: [
          { 
            icon: "https://img.icons8.com/color/48/000000/map-marker.png",
            name: "Kalamba Lake (2.8 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/temple.png",
            name: "Sai Mandir Kalamba (5.2 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/school.png",
            name: "Tapowan School (5.2 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/school.png",
            name: "Ganpatrao Chogule School (0.1 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/temple.png",
            name: "Mahalaxmi Temple (8.1 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/map-marker.png",
            name: "Rankala Lake (8.3 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            name: "D Mart (8.2 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/hospital.png",
            name: "Kesarkar Hospital (4.1 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/bus.png",
            name: "Kolhapur Bus Stand (11 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/train.png",
            name: "Kolhapur Railway Station (10 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/airplane.png",
            name: "Kolhapur Airport (15.6 KM)" 
          }
        ],
      },
    ],
    floorPlans: [
      {
        title: "Floor Plan 1",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/974/103-45e3-8473-6c82130ab310.png",
      },
      {
        title: "Floor Plan 2",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/974/05d-4dbc-b8d1-b3dccc8660a8.png",
      },
      {
        title: "Floor Plan 3",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/974/0a6-4e09-86ff-4d6afe8a3748.png",
      },
    ],
    locality: "Kalamba",
    projectAt: "Kalambe Turf Thane, Kolhapur 416001",
    memberOf: "Builders in Kolhapur",
    contactFormMessage: "I am Interested in Nandini Jadhav Nagar Project. Please Call Me.",
  };

  // SEO data
  const seoTitle = "Nandini Jadhav Nagar - NA Open Plots in Kolhapur by Avishkar Infra";
  const seoDescription = "Invest in premium NA Open Plots at Nandini Jadhav Nagar, Kolhapur. Located near Kalamba Lake with excellent connectivity to schools, hospitals, and city amenities. Developed by Avishkar Infra.";
  const pageUrl = "https://www.avishkarinfra.com/projects/nandini-jadhav-nagar";

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="realestate.property" />
        <meta property="og:title" content={`${propertyData.subtitle} | Avishkar Infra`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${propertyData.images[0]}`} />
        <meta property="og:image:alt" content={propertyData.title} />
        <meta property="og:site_name" content="Avishkar Infra" />
       
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={`${propertyData.subtitle} | Avishkar Infra`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${propertyData.images[0]}`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <PropertyListing {...propertyData} />
      </div>
    </>
  );
};

export default NandiniJadhavNagar;
