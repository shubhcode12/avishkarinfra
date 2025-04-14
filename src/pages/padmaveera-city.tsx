import React from "react";
import PropertyListing from "../components/RealEstate/PropertyListing";
import Head from "next/head";
import Link from "next/link";

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
  const seoTitle = "Premium 1BHK & 2BHK Flats, Shops in Jaysingpur | Padmaveera City";
  const seoDescription = "Buy premium 1BHK & 2BHK flats and commercial shops in Jaysingpur at Padmaveera City. RERA registered residential & commercial property near railway station. Developed by Avishkar Infra.";
  const pageUrl = "https://www.avishkarinfra.com/padmaveera-city";
  const keywords = "commercial property near me, commercial property in jaysingpur, residential property in jaysingpur, flats in jaysingpur, 1bhk premium flats in jaysingpur, 2bhk flats in jaysingpur, shops and offices in jaysingpur, shops for sell, avishkarinfra";

  // Additional SEO-related content
  const relatedProjects = [
    { name: "Malhar Ramgiri", url: "/projects/malharramgiri" },
    { name: "Nandini Jadhav Nagar", url: "/projects/nandinijadhavnagar" }
  ];

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="realestate.property" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${propertyData.images[0]}`} />
        <meta property="og:image:alt" content="Padmaveera City - Premium Flats and Shops in Jaysingpur" />
        <meta property="og:site_name" content="Avishkar Infra" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${propertyData.images[0]}`} />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Avishkar Infra" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Jaysingpur" />
        
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
              "image": propertyData.images,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C.S.NO. 2373K/1/B AND C.S.NO. 2373K/2",
                "addressLocality": "Jaysingpur",
                "addressRegion": "Kolhapur",
                "postalCode": "416101",
                "addressCountry": "IN"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "1 BHK Premium Flats",
                  "price": "2522000",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "2 BHK Flats",
                  "price": "3627000",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                {
                  "@type": "Offer",
                  "name": "Commercial Shops",
                  "price": "2250000",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                }
              ],
              "provider": {
                "@type": "Organization",
                "name": "Avishkar Infra",
                "telephone": "+917276080909",
                "url": "https://avishkarinfra.com/"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "RERA Registration",
                  "value": "P53000053009"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Property Type",
                  "value": "Residential and Commercial"
                }
              ]
            })
          }}
        />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of properties are available in Padmaveera City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Padmaveera City offers 1 BHK flats (646.84 - 661.95 Sq.Ft), 2 BHK flats (930.10 - 955.96 Sq.Ft), and commercial shops (230.96 Sq.Ft)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the price range for flats in Padmaveera City?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1 BHK flats are priced between ₹25.22 - 25.81 Lakhs, while 2 BHK flats range from ₹36.27 - 37.28 Lakhs. Commercial shops are available at ₹22.50 Lakhs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Padmaveera City RERA registered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Padmaveera City is registered with MahaRERA. The registration number is P53000053009."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the nearby landmarks to Padmaveera City in Jaysingpur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Padmaveera City is located near Railway Station (0.5 KM), Market & Hospital (1.1 KM), Main Bus Stand (1.4 KM), and educational institutions like Dr. J. J. Magdum College."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Avishkar Infra",
              "image": "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
              "url": "https://avishkarinfra.com/",
              "telephone": "+917276080909",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gaurinandan, Kalamba Ring Road",
                "addressLocality": "Kolhapur",
                "postalCode": "416003",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 16.789183,
                "longitude": 74.546163
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <PropertyListing {...propertyData} />
        
        {/* SEO-friendly content section */}
        <div className="max-w-7xl mx-auto px-4 py-8 bg-white rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Residential & Commercial Property in Jaysingpur</h2>
          
          <div className="prose max-w-none">
            <p>
              <strong>Padmaveera City</strong> offers the finest <strong>1BHK and 2BHK flats in Jaysingpur</strong> along with premium <strong>commercial shops</strong> for investors and business owners. Located strategically near the Railway Station, this RERA-registered project by <strong>Avishkar Infra</strong> combines luxury, convenience, and affordability.
            </p>
            
            <h3>Why Choose Padmaveera City for Your Residential or Commercial Needs?</h3>
            
            <ul>
              <li><strong>Prime Location:</strong> Situated in the heart of Jaysingpur with excellent connectivity to Railway Station (0.5 KM), Market & Hospital (1.1 KM), and Main Bus Stand (1.4 KM).</li>
              <li><strong>Quality Construction:</strong> Built with premium materials and modern architecture to ensure durability and aesthetic appeal.</li>
              <li><strong>Variety of Options:</strong> Choose from 1BHK flats (646.84 - 661.95 Sq.Ft), 2BHK flats (930.10 - 955.96 Sq.Ft), or commercial shops (230.96 Sq.Ft).</li>
              <li><strong>Transparent Pricing:</strong> Clear pricing structure with 1BHK starting at ₹25.22 Lakhs, 2BHK at ₹36.27 Lakhs, and shops at ₹22.50 Lakhs.</li>
              <li><strong>RERA Registered:</strong> Complete peace of mind with MahaRERA registration number P53000053009.</li>
            </ul>
            
            <h3>Looking for Commercial Property in Jaysingpur?</h3>
            
            <p>
              Padmaveera City offers excellent <strong>commercial shops for sale</strong> that are perfect for retail businesses, offices, or investment purposes. With a strategic location near the railway station and main market area, these commercial spaces provide high visibility and footfall potential.
            </p>
            
            <h3>Premium 1BHK & 2BHK Flats in Jaysingpur</h3>
            
            <p>
              Our residential units are designed with modern families in mind. The <strong>1BHK premium flats</strong> offer compact luxury with efficient space utilization, while our <strong>2BHK flats</strong> provide ample space for growing families. All units feature quality fittings, adequate ventilation, and modern amenities.
            </p>
            
            <h3>About Avishkar Infra</h3>
            
            <p>
              <strong>Avishkar Infra</strong> is a trusted name in real estate development in Kolhapur region. With a commitment to quality construction, transparent dealings, and customer satisfaction, we have established ourselves as a premier developer of residential and commercial properties.
            </p>
            
            <h3>Related Projects by Avishkar Infra</h3>
            
            <ul className="list-disc pl-5">
              {relatedProjects.map((project, index) => (
                <li key={index}>
                  <Link href={project.url} className="text-blue-600 hover:underline">
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PadmaveeraCity;
