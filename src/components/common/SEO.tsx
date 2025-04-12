import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.avishkarinfra.com/_next/static/media/Avishkar%20White%20Logo.e37881f4.png',
  ogType = 'website',
  twitterHandle = '@avishkarinfra',
  structuredData,
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.avishkarinfra.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Avishkar Infra" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO; 