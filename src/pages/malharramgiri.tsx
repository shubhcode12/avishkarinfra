import React from 'react';
import PropertyListing from '../components/RealEstate/PropertyListing';
import SEO from '../components/common/SEO';

const MalharRamgiri: React.FC = () => {
  // Project data for Malhar Ramgiri
  const propertyData = {
    title: "Avishkar Infra",
    subtitle: "Malhar Ramgiri - N.A. Open Plots Ready Possession",
    location: "R. S. No. 1175, Near Tahasildar Office, Hatkanangale",
    totalPrice: 0, // Contact to Builder
    propertyArea: 1000, // Min area
    builtUpArea: 2000, // Max area
    attributes: [
      { name: "NA Open Plots" },
      { name: "79 Total Units" },
      { name: "40 Available Units" },
      { name: "1000 Sq.Ft - 2000 Sq.Ft Area" },
      { name: "Price Excluding Other Charges" },
      { name: "Separate 7/12 For Every Plot" }
    ],
    images: [
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards003.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards002.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards01.jpg"
    ],
    agentName: "Vishal Khade / Amin Sanade",
    agentPhone: "+917276080909 / +919322102323",
    agentCompany: "Avishkar Infra",
    agentImageUrl: "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    companyLogoUrl: "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    officeAddress: "Gaurinandan, Kalamba Ring Road, Kolhapur - 416003",
    website: "https://avishkarinfra.com/",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5193769651686!2d74.42053951485878!3d16.751111088458236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzA0LjAiTiA3NMKwMjUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
    amenities: [
      {
        title: "Basic",
        items: [
          { 
            icon: "https://img.icons8.com/color/48/000000/water.png", 
            name: "24 Hours Water Supply" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/electricity.png", 
            name: "MSEB Light" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/road.png", 
            name: "Internal Tar Roads" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/document.png", 
            name: "Separate 7/12 For Every Plot" 
          }
        ]
      },
      {
        title: "Location Advantages",
        items: [
          { 
            icon: "https://img.icons8.com/color/48/000000/government.png", 
            name: "Tahsildar Office (0.5 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/bus.png", 
            name: "Central Bus Stand (0.55 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/school.png", 
            name: "Orchid International School (0.55 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/university.png", 
            name: "Shri Annasaheb Dange College (1.3 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/train.png", 
            name: "Hatkanangale Railway Station (0.65 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/university.png", 
            name: "Sanjay Ghodawat University (5.3 KM)" 
          },
          { 
            icon: "https://img.icons8.com/color/48/000000/city.png", 
            name: "Jaysingpur (13.5 KM)" 
          }
        ]
      }
    ]
  };

  // SEO data
  const seoTitle = "Malhar Ramgiri - NA Open Plots in Hatkanangale by Avishkar Infra";
  const seoDescription = "Invest in premium NA Open Plots at Malhar Ramgiri, Hatkanangale. Ready possession plots with 24-hour water supply, MSEB light, internal tar roads, and separate 7/12 for every plot. Developed by Avishkar Infra.";
  const ogImage = "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards003.jpg";
  const pageUrl = "https://www.avishkarinfra.com/projects/malhar-ramgiri";

  // Structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Malhar Ramgiri",
    "description": seoDescription,
    "url": pageUrl,
    "image": propertyData.images[0],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. S. No. 1175, Near Tahasildar Office",
      "addressLocality": "Hatkanangale",
      "addressRegion": "Kolhapur",
      "postalCode": "",
      "addressCountry": "IN"
    },
    "offers": {
      "@type": "Offer",
      "price": "Contact for Price",
      "priceCurrency": "INR"
    },
    "provider": {
      "@type": "Organization",
      "name": "Avishkar Infra",
      "telephone": "+917276080909",
      "url": "https://avishkarinfra.com/"
    }
  };

  

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        canonical="/projects/malhar-ramgiri"
        ogImage={ogImage}
        ogType="realestate.property"
        structuredData={structuredData}
      />         
      
      <div className="min-h-screen bg-gray-50">
        <PropertyListing {...propertyData} />
      </div>
    </>
  );
};

export default MalharRamgiri; 
