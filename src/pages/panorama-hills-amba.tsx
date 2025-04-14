import React from "react";
import PropertyListing from "../components/RealEstate/PropertyListing";
import Head from "next/head";
import Link from "next/link";

const PanoramaHillsAmba: React.FC = () => {
  // Project data for Panorama Hills
  const propertyData = {
    title: "Avishkar Infra",
    subtitle: "Panorama Hills - N.A. Open Plots in Scenic Amba",
    location: "Manoli (Amba), Shahuwadi, Kolhapur",
    totalPrice: 0, // Contact to Builder
    propertyArea: 3000, // Min area
    builtUpArea: 20000, // Max area
    attributes: [
      { name: "NA Open Plots" },
      { name: "130 Total Units" },
      { name: "50 Available Units" },
      { name: "3000 Sq.Ft - 20000 Sq.Ft Area" },
      { name: "Price Excluding Other Charges" },
      { name: "Scenic Hill View Plots" },
    ],
    images: [
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-panoramahills2.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-panoramahills1.jpg",    
    ],
    agentName: "Vishal Khade / Amin Sanade",
    agentPhone: "+917276080909 / +919322102323",
    agentCompany: "Avishkar Infra",
    agentImageUrl:
      "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    companyLogoUrl:
      "https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png",
    officeAddress: "Gaurinandan, Kalamba Ring Road, Kolhapur - 416003",
    website: "https://avishkarinfra.com/",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d17889.958762275208!2d73.80427100000001!3d16.94873!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDU2JzU0LjgiTiA3M8KwNDgnMjIuMSJF!5e1!3m2!1sen!2sin!4v1744617357721!5m2!1sen!2sin",
    amenities: [
      {
        title: "Basic",
        items: [
          {
            icon: "https://img.icons8.com/color/48/000000/road.png",
            name: "Internal Roads",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/water.png",
            name: "Water Connection",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/document.png",
            name: "Land - Collector NA",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/toilet.png",
            name: "T.P. Sanitation",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/park.png",
            name: "Open Space",
          },
        ],
      },
      {
        title: "Location Advantages",
        items: [
          {
            icon: "https://img.icons8.com/color/48/000000/road.png",
            name: "Amba Vishalgad Road (3 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/temple.png",
            name: "Ganesh Mandir (1.5 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/waterfall.png",
            name: "Manoli Waterfall (2 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/dam.png",
            name: "Manoli Dam (2 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/city.png",
            name: "Kolhapur City (68 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/small-city.png",
            name: "Malkapur (20 KM)",
          },
        ],
      },
    ],
    floorPlans: [
      {
        title: "Layout Plan",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/panorama-hills-layout.jpg",
      }
    ],
    locality: "Amba",
    projectAt: "Manoli (Amba), Shahuwadi, Kolhapur",
    memberOf: "Builders in Kolhapur",
    contactFormMessage: "I am Interested in Panorama Hills Project. Please Call Me.",
  };

  // SEO data
  const seoTitle = "Hill View NA Plots in Amba, Kolhapur | Panorama Hills by Avishkar Infra";
  const seoDescription = "Invest in premium NA open plots at Panorama Hills, Amba with stunning hill views. Large plots from 3000-20000 sq.ft near Manoli Waterfall and Dam. Perfect for farmhouses and weekend homes.";
  const pageUrl = "https://www.avishkarinfra.com/panorama-hills-amba";
  const keywords = "hill view plots in Amba, NA plots in Shahuwadi, farmhouse plots near Kolhapur, weekend home plots, investment plots in Amba, hill station property, Manoli plots, scenic plots Kolhapur, Avishkar Infra plots, buy land in Amba";

  // Additional SEO-related content
  const relatedProjects = [
    { name: "Nandini Jadhav Nagar", url: "/nandini-jadhav-nagar" },
    { name: "Malhar Ramgiri", url: "/malharramgiri" },
    { name: "Padmaveera City", url: "/padmaveera-city" }
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
        <meta property="og:image:alt" content="Panorama Hills - Hill View Plots in Amba" />
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
        <meta name="geo.placename" content="Amba, Shahuwadi" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Panorama Hills",
              "description": seoDescription,
              "url": pageUrl,
              "image": propertyData.images,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Manoli",
                "addressLocality": "Amba, Shahuwadi",
                "addressRegion": "Kolhapur",
                "addressCountry": "IN"
              },
              "offers": {
                "@type": "Offer",
                "name": "NA Open Plots",
                "availability": "https://schema.org/InStock"
              },
              "provider": {
                "@type": "Organization",
                "name": "Avishkar Infra",
                "telephone": "+917276080909",
                "url": "https://avishkarinfra.com/"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Plot Size",
                  "value": "3000 Sq.Ft - 20000 Sq.Ft"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Property Type",
                  "value": "NA Open Plots"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Special Feature",
                  "value": "Hill View"
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
                  "name": "What is Panorama Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Panorama Hills is a premium NA (Non-Agricultural) open plots project in Amba, Shahuwadi developed by Avishkar Infra. It offers scenic hill view plots ranging from 3000 Sq.Ft to 20000 Sq.Ft, perfect for building farmhouses or weekend homes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the attractions near Panorama Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Panorama Hills is located in a scenic area with several attractions nearby including Manoli Waterfall (2 KM), Manoli Dam (2 KM), Ganesh Mandir (1.5 KM), and is just 3 KM from Amba Vishalgad Road."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Panorama Hills suitable for a weekend home?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Panorama Hills is ideal for weekend homes and farmhouses due to its scenic location in Amba, large plot sizes (3000-20000 sq.ft), natural surroundings, and proximity to attractions like Manoli Waterfall and Dam."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far is Panorama Hills from Kolhapur city?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Panorama Hills is located approximately 68 KM from Kolhapur city, making it a perfect weekend getaway while still being accessible for city dwellers."
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
                "latitude": 16.9,
                "longitude": 73.9
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Hill View NA Plots in Amba at Panorama Hills</h2>
          
          <div className="prose max-w-none">
            <p>
              <strong>Panorama Hills</strong> offers premium <strong>hill view NA open plots in Amba, Shahuwadi</strong> for those looking to invest in scenic property or build their dream farmhouse/weekend home. Developed by <strong>Avishkar Infra</strong>, this project is nestled in the beautiful hills of Amba with breathtaking views and natural surroundings.
            </p>
            
            <h3>Why Invest in Panorama Hills Amba?</h3>
            
            <ul>
              <li><strong>Scenic Location:</strong> Set amidst the picturesque hills of Amba with panoramic views that justify the project's name.</li>
              <li><strong>Large Plot Sizes:</strong> Spacious plots ranging from 3000 Sq.Ft to 20000 Sq.Ft, perfect for building expansive farmhouses or weekend retreats.</li>
              <li><strong>Natural Attractions:</strong> Located near Manoli Waterfall (2 KM) and Manoli Dam (2 KM), offering recreational opportunities and natural beauty.</li>
              <li><strong>Peaceful Environment:</strong> Away from the hustle and bustle of city life, providing a serene atmosphere for relaxation and rejuvenation.</li>
              <li><strong>Investment Potential:</strong> Hill station properties have shown consistent appreciation, making this an excellent long-term investment.</li>
            </ul>
            
            <h3>Perfect for Farmhouses and Weekend Homes</h3>
            
            <p>
              Panorama Hills is ideal for those seeking <strong>farmhouse plots near Kolhapur</strong> or <strong>weekend home plots</strong> in a scenic location. The large plot sizes allow you to build spacious homes with gardens, orchards, or even small agricultural activities for a self-sustainable lifestyle.
            </p>
            
            <p>
              The cool climate of Amba, combined with the natural beauty of the surroundings, makes it a perfect retreat from the heat and pollution of urban areas. Imagine waking up to misty mornings, bird songs, and breathtaking views of rolling hills from your own property.
            </p>
            
            <h3>Key Features of Panorama Hills Plots</h3>
            
            <ul>
              <li><strong>NA Status:</strong> All plots are Non-Agricultural with proper documentation, allowing for residential construction.</li>
              <li><strong>Internal Roads:</strong> Well-planned internal road network for easy access to all plots.</li>
              <li><strong>Water Connection:</strong> Provision for water supply to all plots.</li>
              <li><strong>Sanitation:</strong> T.P. Sanitation facilities as per township planning norms.</li>
              <li><strong>Open Spaces:</strong> Dedicated open spaces within the project for community activities and recreation.</li>
            </ul>
            
            <h3>Natural Attractions Near Panorama Hills</h3>
            
            <p>
              Investing in <strong>hill station property</strong> at Panorama Hills gives you access to several natural attractions:
            </p>
            
            <ul>
              <li><strong>Manoli Waterfall:</strong> Just 2 KM away, this beautiful waterfall is perfect for picnics and nature photography.</li>
              <li><strong>Manoli Dam:</strong> Located 2 KM from the project, offering serene views and water activities.</li>
              <li><strong>Ganesh Mandir:</strong> A peaceful temple just 1.5 KM away for spiritual seekers.</li>
              <li><strong>Amba Vishalgad Road:</strong> 3 KM from the project, connecting to various tourist destinations in the region.</li>
            </ul>
            
            <h3>Connectivity</h3>
            
            <p>
              While Panorama Hills offers a secluded retreat, it maintains good connectivity:
            </p>
            
            <ul>
              <li>Malkapur - 20 KM</li>
              <li>Kolhapur City - 68 KM</li>
              <li>Accessible via Amba Vishalgad Road</li>
            </ul>
            
            <h3>About Avishkar Infra</h3>
            
            <p>
              <strong>Avishkar Infra</strong> is a trusted name in real estate development in the Kolhapur region. With a commitment to quality, transparency, and customer satisfaction, we have established ourselves as a premier developer of residential plots and properties across various locations.
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
            
            <h3>Frequently Asked Questions</h3>
            
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold">Is Panorama Hills suitable for permanent residence?</h4>
                <p>While Panorama Hills is primarily marketed as a weekend home or farmhouse destination, the NA status of the plots allows for permanent residential construction. However, you should consider factors like distance from urban amenities, schools, and healthcare facilities if planning for permanent residence.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">What is the climate like in Amba?</h4>
                <p>Amba enjoys a pleasant climate throughout the year. Summers are moderate compared to the plains, while monsoons bring lush greenery to the area. Winters are cool and pleasant, making it an ideal year-round destination.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Can I build a farmhouse on these plots?</h4>
                <p>Yes, the large plot sizes (3000-20000 sq.ft) are perfect for building farmhouses. The NA status allows for residential construction, and you can incorporate gardens, orchards, or small farming activities depending on the plot size you choose.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">What is the investment potential of plots in Amba?</h4>
                <p>Hill station properties typically show good appreciation over time as they become increasingly scarce. With growing interest in weekend homes and retreat properties, especially post-pandemic, plots in scenic locations like Amba have strong investment potential for long-term returns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanoramaHillsAmba;
