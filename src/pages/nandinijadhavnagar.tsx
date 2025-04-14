import React from "react";
import PropertyListing from "../components/RealEstate/PropertyListing";
import Head from "next/head";
import Link from "next/link";

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
  const seoTitle = "NA Open Plots for Sale in Kolhapur | Nandini Jadhav Nagar by Avishkar Infra";
  const seoDescription = "Invest in premium NA Open Plots at Nandini Jadhav Nagar, Kolhapur. Located near Kalamba Lake with excellent connectivity to schools, hospitals, and city amenities. Developed by Avishkar Infra.";
  const pageUrl = "https://www.avishkarinfra.com/nandini-jadhav-nagar";
  const keywords = "NA plots in Kolhapur, open plots for sale in Kolhapur, land for sale near Kalamba, investment plots in Kolhapur, residential plots Kolhapur, NA plot near me, property investment Kolhapur, Avishkar Infra plots, buy land in Kolhapur, Nandini Jadhav Nagar";

  // Additional SEO-related content
  const relatedProjects = [
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
        <meta property="og:image:alt" content="Nandini Jadhav Nagar - NA Open Plots in Kolhapur" />
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
        <meta name="geo.placename" content="Kolhapur" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              "name": "Nandini Jadhav Nagar",
              "description": seoDescription,
              "url": pageUrl,
              "image": propertyData.images,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kalambe Turf Thane",
                "addressLocality": "Kolhapur",
                "postalCode": "416001",
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
                  "value": "1000 Sq.Ft"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Property Type",
                  "value": "NA Open Plots"
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
                  "name": "What is Nandini Jadhav Nagar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nandini Jadhav Nagar is a premium NA (Non-Agricultural) open plots project in Kolhapur developed by Avishkar Infra. It offers 1000 Sq.Ft plots with excellent connectivity to major landmarks like Kalamba Lake, schools, hospitals, and the city center."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the advantages of investing in NA plots in Kolhapur?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Investing in NA plots in Kolhapur offers several advantages including potential for high appreciation, freedom to build as per your requirements, lower property taxes compared to constructed properties, and the ability to develop the land when you're ready."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities are available near Nandini Jadhav Nagar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nandini Jadhav Nagar is strategically located with excellent access to Kalamba Lake (2.8 KM), Ganpatrao Chogule School (0.1 KM), Kesarkar Hospital (4.1 KM), D Mart (8.2 KM), Kolhapur Bus Stand (11 KM), and Kolhapur Railway Station (10 KM)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many plots are available in Nandini Jadhav Nagar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nandini Jadhav Nagar has a total of 130 plots, with 30 plots currently available for purchase. Each plot is 1000 Sq.Ft in size."
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
                "latitude": 16.630252,
                "longitude": 74.204795
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium NA Open Plots in Kolhapur at Nandini Jadhav Nagar</h2>
          
          <div className="prose max-w-none">
            <p>
              <strong>Nandini Jadhav Nagar</strong> offers premium <strong>NA open plots in Kolhapur</strong> for those looking to invest in land or build their dream home. Developed by <strong>Avishkar Infra</strong>, this project is strategically located in Kalambe Turf Thane with excellent connectivity to major landmarks and amenities.
            </p>
            
            <h3>Why Invest in NA Open Plots at Nandini Jadhav Nagar?</h3>
            
            <ul>
              <li><strong>Prime Location:</strong> Situated in a rapidly developing area of Kolhapur with proximity to Kalamba Lake (2.8 KM), educational institutions, healthcare facilities, and commercial centers.</li>
              <li><strong>Legal Clarity:</strong> All plots are Non-Agricultural (NA) with clear titles, ensuring hassle-free ownership and development rights.</li>
              <li><strong>Perfect Size:</strong> Each plot measures 1000 Sq.Ft, ideal for building a spacious home or for investment purposes.</li>
              <li><strong>Limited Availability:</strong> With only 30 plots remaining out of 130, this is a limited opportunity to own land in this premium location.</li>
              <li><strong>Excellent Connectivity:</strong> Easy access to Kolhapur Bus Stand (11 KM), Railway Station (10 KM), and Airport (15.6 KM).</li>
            </ul>
            
            <h3>Benefits of Investing in Open Plots in Kolhapur</h3>
            
            <p>
              Kolhapur's real estate market has shown consistent growth over the years, making <strong>open plots for sale in Kolhapur</strong> a lucrative investment option. Unlike constructed properties, land appreciates significantly over time and offers flexibility in development according to your needs and timeline.
            </p>
            
            <p>
              Investing in <strong>NA plots near Kalamba</strong> is particularly advantageous due to the area's development potential, scenic surroundings, and proximity to essential amenities. Nandini Jadhav Nagar offers you the opportunity to be part of this growing neighborhood.
            </p>
            
            <h3>Features of Nandini Jadhav Nagar Plots</h3>
            
            <ul>
              <li><strong>Clear Title:</strong> Legally verified plots with proper documentation</li>
              <li><strong>Development Permissions:</strong> All necessary permissions for residential construction</li>
              <li><strong>Infrastructure:</strong> Well-planned layout with proper roads and boundaries</li>
              <li><strong>Investment Potential:</strong> Located in a high-growth area of Kolhapur</li>
              <li><strong>Trusted Developer:</strong> Developed by Avishkar Infra, a reputed name in Kolhapur real estate</li>
            </ul>
            
            <h3>About Avishkar Infra</h3>
            
            <p>
              <strong>Avishkar Infra</strong> is one of the leading real estate developers in Kolhapur, known for delivering quality projects with transparency and customer satisfaction. With years of experience in the industry, we have established ourselves as a trusted name for <strong>property investment in Kolhapur</strong>.
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
            
            <h3>Frequently Asked Questions About NA Plots</h3>
            
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold">What does NA (Non-Agricultural) mean?</h4>
                <p>NA or Non-Agricultural land means the land has been legally converted from agricultural use to non-agricultural purposes like residential or commercial development. This conversion is essential for legally constructing buildings on the land.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Can I build a house immediately after purchasing a plot?</h4>
                <p>Yes, since these are NA plots with all necessary permissions, you can start construction as per local building regulations after completing the purchase process.</p>
              </div>
              
              <div>
                <h4 className="font-semibold">What documents will I receive after purchasing a plot?</h4>
                <p>You will receive a comprehensive set of documents including the Sale Deed, NA Order, 7/12 Extract, Property Card, and other relevant permissions and certificates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NandiniJadhavNagar;
