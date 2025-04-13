import React from "react";
import PropertyListing from "../components/RealEstate/PropertyListing";
import Head from "next/head";

const PadmaveeraCity: React.FC = () => {
  // Project data for Padmaveera City
  const propertyData = {
    title: "PADMAVEERA INFRATECH",
    subtitle: "PADMAVEERA CITY - Residential Commercial Under Construction",
    location: "C.S.NO. 2373K/1/B AND C.S.NO. 2373K/2, AT. Jaysingpur, Tal.- Shirol, Dist.- Kolhapur 416 101",
    totalPrice: 2522000, // Starting price in rupees
    propertyArea: 646.84, // Min area
    builtUpArea: 955.96, // Max area
    attributes: [
      { name: "1 BHK & 2 BHK Flats" },
      { name: "98 Total Units" },
      { name: "84 Available Units" },
      { name: "646.84 Sq.Ft - 955.96 Sq.Ft Area" },
      { name: "Price Starting from ₹25.22 Lakhs" },
      { name: "Construction Stage: 20%" },
      { name: "RERA Registered: P53000053009" }
    ],
    images: [
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-p2.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-p3.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-p4.jpg",     
    ],
    agentName: "Padmaveera Infratech",
    agentPhone: "+917276080909 / +919322102323",
    agentCompany: "PADMAVEERA INFRATECH",
    agentImageUrl:
      "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    companyLogoUrl:
      "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    officeAddress: "Office Unit No. 501, Emerald Corner 1224/k, Rajarampuri 2nd lane, Opp. Unity Small Finance Bank, Kolhapur 416001",
    website: "https://padmaveerainfratech.com/",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8952.53557943493!2d74.546163!3d16.789183!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ3JzIxLjAiTiA3NMKwMzMnMDMuNyJF!5e1!3m2!1sen!2sin!4v1744527673540!5m2!1sen!2sin",
    eBrochureUrl: "https://www.gruhkhoj.com/media/images/brochure/Brochure.pdf",
    amenities: [
      {
        title: "Location Advantages",
        items: [
          { 
            icon: "https://img.icons8.com/color/48/000000/train.png",
            name: "Railway Station (0.5 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            name: "Market, Hospital (1.1 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/bus.png",
            name: "Main Bus Stand (1.4 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/stadium.png",
            name: "Dasara Chowk Stadium (1.9 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/university.png",
            name: "Dr. J. J. Magdum College Of Pharmacy (2.1 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/university.png",
            name: "Dr. J. J. Magdum College of Engineering (3.2 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/factory.png",
            name: "Industrial Estate, Jaysingpur (4.5 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/school.png",
            name: "Deep Public School (4.6 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/city.png",
            name: "Sangli (10.5 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/university.png",
            name: "Sanjay Ghodawat University (20 KM)" 
          }
        ],
      },
      {
        title: "Property Details",
        items: [
          { 
            icon: "https://img.icons8.com/color/48/000000/home.png",
            name: "1 BHK: 646.84 - 661.95 Sq.Ft" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/money.png",
            name: "1 BHK: ₹25.22 - 25.81 Lakhs" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/home.png",
            name: "2 BHK: 930.10 - 955.96 Sq.Ft" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/money.png",
            name: "2 BHK: ₹36.27 - 37.28 Lakhs" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/shop.png",
            name: "Shops: 230.96 Sq.Ft" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/money.png",
            name: "Shops: ₹22.50 Lakhs" 
          }
        ],
      }
    ],
    floorPlans: [
      {
        title: "1st, 3rd, 5th, 7th Floor",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/padmaveera-city-floor-plan-1.jpg",
      },
      {
        title: "2nd, 4th, 6th Floor",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/padmaveera-city-floor-plan-2.jpg",
      }
    ],
    locality: "Near Railway Station",
    projectAt: "C.S.NO. 2373K/1/B AND C.S.NO. 2373K/2, AT. Jaysingpur, Tal.- Shirol, Dist.- Kolhapur 416 101",
    memberOf: "RERA Registered: P53000053009",
    contactFormMessage: "I am Interested in PADMAVEERA CITY Project. Please Call Me.",
  };

  // SEO data
  const seoTitle = "Padmaveera City - Residential & Commercial Project in Jaysingpur by Padmaveera Infratech";
  const seoDescription = "Invest in premium 1 BHK & 2 BHK flats and shops at Padmaveera City, Jaysingpur. RERA registered project with excellent connectivity to railway station, markets, and educational institutions. Developed by Padmaveera Infratech.";
  const pageUrl = "https://www.avishkarinfra.com/projects/padmaveera-city";

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
        <meta property="og:title" content={`${propertyData.subtitle} | Padmaveera Infratech`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${propertyData.images[0]}`} />
        <meta property="og:image:alt" content={propertyData.title} />
        <meta property="og:site_name" content="Padmaveera Infratech" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={`${propertyData.subtitle} | Padmaveera Infratech`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${propertyData.images[0]}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Padmaveera City",
              "description": seoDescription,
              "url": pageUrl,
              "image": propertyData.images[0],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C.S.NO. 2373K/1/B AND C.S.NO. 2373K/2",
                "addressLocality": "Jaysingpur",
                "addressRegion": "Kolhapur",
                "postalCode": "416101",
                "addressCountry": "IN"
              },
              "offers": {
                "@type": "Offer",
                "price": "2522000",
                "priceCurrency": "INR"
              },
              "provider": {
                "@type": "Organization",
                "name": "Padmaveera Infratech",
                "telephone": "+917276080909",
                "url": "https://padmaveerainfratech.com/"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <PropertyListing {...propertyData} />
      </div>
    </>
  );
};

export default PadmaveeraCity;
