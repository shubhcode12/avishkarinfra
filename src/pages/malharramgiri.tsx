import React from "react";
import PropertyListing from "../components/RealEstate/PropertyListing";
import Head from "next/head";
import Link from "next/link";

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
      { name: "Separate 7/12 For Every Plot" },
    ],
    images: [
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards003.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards002.jpg",
      "https://www.gruhkhoj.com/media/images/gallery-images/protected-resized-Malharramgariboards01.jpg",
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5193769651686!2d74.42053951485878!3d16.751111088458236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzA0LjAiTiA3NMKwMjUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
    amenities: [
      {
        title: "Basic",
        items: [
          {
            icon: "https://img.icons8.com/color/48/000000/water.png",
            name: "24 Hours Water Supply",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/electricity.png",
            name: "MSEB Light",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/road.png",
            name: "Internal Tar Roads",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/document.png",
            name: "Separate 7/12 For Every Plot",
          },
        ],
      },
      {
        title: "Location Advantages",
        items: [
          {
            icon: "https://img.icons8.com/color/48/000000/government.png",
            name: "Tahsildar Office (0.5 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/bus.png",
            name: "Central Bus Stand (0.55 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/school.png",
            name: "Orchid International School (0.55 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/university.png",
            name: "Shri Annasaheb Dange College (1.3 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/train.png",
            name: "Hatkanangale Railway Station (0.65 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/university.png",
            name: "Sanjay Ghodawat University (5.3 KM)",
          },
          {
            icon: "https://img.icons8.com/color/48/000000/city.png",
            name: "Jaysingpur (13.5 KM)",
          },
        ],
      },
    ],
    floorPlans: [
      {
        title: "Layout Plan",
        imageUrl: "https://www.gruhkhoj.com/media/images/floor-plans/malhar-ramgiri-layout.jpg",
      }
    ],
    locality: "Hatkanangale",
    projectAt: "R. S. No. 1175, Near Tahasildar Office, Hatkanangale",
    memberOf: "Builders in Kolhapur",
    contactFormMessage: "I am Interested in Malhar Ramgiri Project. Please Call Me.",
  };

  // SEO data
  const seoTitle = "Ready Possession NA Open Plots in Hatkanangale | Malhar Ramgiri";
  const seoDescription = "Buy ready possession NA open plots at Malhar Ramgiri, Hatkanangale with 24-hour water supply, MSEB electricity, internal tar roads, and separate 7/12 for every plot. Developed by Avishkar Infra.";
  const pageUrl = "https://www.avishkarinfra.com/malharramgiri";
  const keywords = "NA plots in Hatkanangale, open plots for sale in Hatkanangale, ready possession plots, land for sale near Hatkanangale, investment plots, residential plots, NA plot near me, property investment, Avishkar Infra plots, buy land in Hatkanangale, Malhar Ramgiri";

  // Additional SEO-related content
  const relatedProjects = [
    { name: "Nandini Jadhav Nagar", url: "/nandini-jadhav-nagar" },
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
        <meta property="og:image:alt" content="Malhar Ramgiri - NA Open Plots in Hatkanangale" />
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
        <meta name="geo.placename" content="Hatkanangale" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Malhar Ramgiri",
              "description": seoDescription,
              "url": pageUrl,
              "image": propertyData.images,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. S. No. 1175, Near Tahasildar Office",
                "addressLocality": "Hatkanangale",
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
                  "value": "1000 Sq.Ft - 2000 Sq.Ft"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Property Type",
                  "value": "NA Open Plots"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Possession Status",
                  "value": "Ready Possession"
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
                  "name": "What is Malhar Ramgiri?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Malhar Ramgiri is a premium NA (Non-Agricultural) open plots project in Hatkanangale developed by Avishkar Infra. It offers ready possession plots ranging from 1000 Sq.Ft to 2000 Sq.Ft with amenities like 24-hour water supply, MSEB electricity, and internal tar roads."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the key features of Malhar Ramgiri plots?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Malhar Ramgiri offers ready possession NA plots with 24-hour water supply, MSEB electricity connection, internal tar roads, and separate 7/12 documentation for every plot. The project is strategically located near Tahsildar Office and Hatkanangale Railway Station."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities are available near Malhar Ramgiri?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Malhar Ramgiri is strategically located with excellent access to Tahsildar Office (0.5 KM), Central Bus Stand (0.55 KM), Orchid International School (0.55 KM), Hatkanangale Railway Station (0.65 KM), and Shri Annasaheb Dange College (1.3 KM)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does 'separate 7/12 for every plot' mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A 7/12 extract is an important land record document in Maharashtra that establishes ownership. Having a separate 7/12 for each plot means that every buyer gets individual ownership documentation, making it easier to establish clear title and ownership rights."
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
                "latitude": 16.751111,
                "longitude": 74.420539
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready Possession NA Open Plots in Hatkanangale at Malhar Ramgiri</h2>
          
          <div className="prose max-w-none">
            <p>
              <strong>Malhar Ramgiri</strong> offers premium <strong>ready possession NA open plots in Hatkanangale</strong> for those looking to invest in land or build their dream home immediately. Developed by <strong>Avishkar Infra</strong>, this project is strategically located near the Tahsildar Office with excellent connectivity to essential amenities.
            </p>
            
            <h3>Why Choose Malhar Ramgiri for Your Investment?</h3>
            
            <ul>
              <li><strong>Ready Possession:</strong> No waiting period - purchase today and start building tomorrow.</li>
              <li><strong>Prime Location:</strong> Situated in a rapidly developing area of Hatkanangale with proximity to Tahsildar Office (0.5 KM), Central Bus Stand (0.55 KM), and Railway Station (0.65 KM).</li>
              <li><strong>Clear Documentation:</strong> All plots come with separate 7/12 extracts, ensuring clear title and ownership rights.</li>
              <li><strong>Flexible Plot Sizes:</strong> Choose from plots ranging from 1000 Sq.Ft to 2000 Sq.Ft to suit your needs and budget.</li>
              <li><strong>Essential Amenities:</strong> Enjoy 24-hour water supply, MSEB electricity connection, and well-planned internal tar roads.</li>
            </ul>
            
            <h3>Key Features of Malhar Ramgiri Plots</h3>
            
            <p>
              Malhar Ramgiri stands out among <strong>open plots for sale in Hatkanangale</strong> due to its exceptional features and amenities. Each plot is carefully designed to provide maximum value and convenience to the owners.
            </p>
            
            <ul>
              <li><strong>24-Hour Water Supply:</strong> Reliable water supply system ensuring continuous availability.</li>
              <li><strong>MSEB Electricity:</strong> Ready electrical connections from Maharashtra State Electricity Board.</li>
              <li><strong>Internal Tar Roads:</strong> Well-constructed roads within the project for smooth access.</li>
              <li><strong>Separate 7/12 Documentation:</strong> Individual ownership records for each plot, providing legal clarity.</li>
              <li><strong>Strategic Location:</strong> Proximity to educational institutions, healthcare facilities, and transportation hubs.</li>
            </ul>
            
            <h3>Educational Institutions Near Malhar Ramgiri</h3>
            
            <p>
              Families looking for <strong>residential plots in Hatkanangale</strong> will appreciate the proximity to quality educational institutions:
            </p>
            
            <ul>
              <li>Orchid International School - Just 0.55 KM away</li>
              <li>Shri Annasaheb Dange College - 1.3 KM from the project</li>
              <li>Sanjay Ghodawat University - 5.3 KM distance</li>
            </ul>
            
            <h3>Transportation Connectivity</h3>
            
            <p>
              Malhar Ramgiri offers excellent connectivity, making it an ideal choice for those seeking <strong>NA plots near Hatkanangale</strong>:
            </p>
            
            <ul>
              <li>Hatkanangale Railway Station - 0.65 KM</li>
              <li>Central Bus Stand - 0.55 KM</li>
              <li>Easy access to Jaysingpur (13.5 KM)</li>
            </ul>
            
            <h3>About Avishkar Infra</h3>
            
            <p>
              <strong>Avishkar Infra</strong> is a trusted name in real estate development in the Kolhapur region. With a commitment to quality, transparency, and customer satisfaction, we have established ourselves as a premier developer of residential plots and properties.
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
                <h4 className="font-semibold">What is the advantage of ready possession plots?</h4>
                <p>Ready possession plots allow you to start construction immediately without waiting for development or approvals. You can see exactly what you're buying and plan your construction timeline without delays.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">What is the significance of having a separate 7/12 extract?</h4>
                <p>A separate 7/12 extract is crucial as it is the primary document that establishes land ownership in Maharashtra. Having an individual 7/12 for your plot ensures clear title, makes future transactions smoother, and prevents ownership disputes.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Can I build a commercial property on these NA plots?</h4>
                <p>Yes, since these are NA (Non-Agricultural) plots, you can build residential or commercial properties subject to local zoning regulations and building permissions from the relevant authorities.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">What is the investment potential of Hatkanangale?</h4>
                <p>Hatkanangale is a rapidly developing area with improving infrastructure, educational institutions, and connectivity. Its proximity to Kolhapur and strategic location makes it a promising area for real estate investment with good potential for appreciation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MalharRamgiri;
