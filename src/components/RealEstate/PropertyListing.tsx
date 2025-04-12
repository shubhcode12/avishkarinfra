import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ShareIcon } from '@heroicons/react/24/outline';

interface PropertyAttribute {
  name: string;
}

interface AmenityItem {
  icon: string;
  name: string;
}

interface AmenityCategory {
  title: string;
  items: AmenityItem[];
}

interface PropertyListingProps {
  title: string;
  subtitle: string;
  location: string;
  totalPrice: number;
  propertyArea: number;
  builtUpArea: number;
  attributes: PropertyAttribute[];
  images: string[];  
  agentName: string;
  agentPhone: string;
  agentCompany?: string;
  agentImageUrl: string;
  companyLogoUrl?: string;
  amenities: AmenityCategory[];
  officeAddress?: string;
  website?: string;
  mapUrl?: string;
}

const PropertyListing: React.FC<PropertyListingProps> = ({
  title,
  subtitle,
  location,
  totalPrice,
  propertyArea,
  builtUpArea,
  attributes,
  images,
  agentName,
  agentPhone,
  agentCompany,
  agentImageUrl,
  companyLogoUrl,
  amenities,
  officeAddress,
  website,
  mapUrl,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contactOption, setContactOption] = useState('details');

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message template
    const whatsappNumber = "9933015599";
    const messageTemplate = `
Hello, 

I am ${name} and I'm interested in the ${subtitle} Project.

Contact Details:
- Name: ${name}
- Phone: ${phone}
- Inquiry Type: ${contactOption === 'details' ? 'Get Details' : contactOption === 'callback' ? 'Request Call Back' : 'Visit Project'}

Source: Website

Please contact me regarding this property.

Thank you.
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageTemplate);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setName('');
    setPhone('');
    setContactOption('details');
  };

  const formatPrice = (price: number) => {
    if (price === 0) {
      return "Contact to Builder";
    } else if (price >= 10000000) {
      return `${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(2)} L`;
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(2)} K`;
    }
    return price.toString();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      {/* Main content container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left section - Property details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image gallery */}
          <div className="relative rounded-lg overflow-hidden bg-gray-200 h-[400px]">
            <img 
              src={images[currentImageIndex]} 
              alt={`Property image ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover"
            />
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
            
            <div className="absolute top-4 left-4">
              <button className="bg-gray-800/70 p-2 rounded-md">
                <ShareIcon className="h-5 w-5 text-white" />
              </button>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1}/{images.length}
            </div>
            
            <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
              Gallery
            </div>
          </div>

          {/* Property title and details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-teal-500 font-medium">{title}</h3>
              <h2 className="text-2xl font-bold text-gray-800">{subtitle}</h2>
              <p className="text-gray-600">{location}</p>
            </div>

            {/* Overview section */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">OVERVIEW</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Locality</p>
                  <p className="text-gray-800">Near Tahasildar Office, Hatkanangale</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Project At</p>
                  <p className="text-gray-800">{location}</p>
                </div>
              </div>

              <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Property Details</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Property</p>
                  <p className="text-gray-800">NA Open Plots</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-gray-800">79 Units</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Available</p>
                  <p className="text-gray-800">40 Units</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="text-gray-800">{propertyArea} - {builtUpArea} Sq.Ft</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-gray-800">{formatPrice(totalPrice)}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">* Price Excluding Other Charges</p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Amenities</h3>
              
              {amenities.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h4 className="text-base font-medium text-gray-700 mb-4">{category.title}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                        </div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Developer Information */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{agentCompany}</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Office at:</p>
                  <p className="text-gray-800">{officeAddress}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Contact us:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p className="text-gray-800">Vishal Khade: 7276080909</p>
                    <p className="text-gray-800">Amin Sanade: 9322102323</p>
                  </div>
                  <p className="text-gray-800">Website: <a href={website} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{website}</a></p>
                </div>
              </div>
            </div>

            {/* Project Location Map */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Project location</h3>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src={mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5193769651686!2d74.42053951485878!3d16.751111088458236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzA0LjAiTiA3NMKwMjUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Malhar Ramgiri Project Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Location: R. S. No. 1175, Near Tahasildar Office, Hatkanangale
              </p>
            </div>
          </div>
        </div>

        {/* Right section - Contact form */}
        <div className="space-y-6">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Get call back</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Whatsapp Number
                </label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-white border border-r-0 border-gray-300 rounded-l-md">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="h-4 mr-1" />
                    <span className="text-gray-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>                          

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Select following option</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setContactOption('details')}
                    className={`px-3 py-1 text-sm rounded-md ${
                      contactOption === 'details' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Details
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactOption('callback')}
                    className={`px-3 py-1 text-sm rounded-md ${
                      contactOption === 'callback' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Call Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactOption('visit')}
                    className={`px-3 py-1 text-sm rounded-md ${
                      contactOption === 'visit' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Visit Project
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm text-gray-700">
                  Message: I am Interested in Malhar Ramgiri Project. Please Call Me.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing; 