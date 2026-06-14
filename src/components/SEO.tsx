import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "Shri Chathrapathi Shivaji Co-operative Society, cooperative society Udupi, bank Udupi, cooperative bank Karnataka, finance society, loans in Udupi, fixed deposit Udupi, gold loan Udupi, chathrapathishivaji yahoo", 
  path 
}) => {
  const siteUrl = "https://shivajicooperativeudupi.in"; // Mock URL for SEO validation
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = `${title} | Shri Chathrapathi Shivaji Co-operative Society Ltd.`;

  // LocalBusiness JSON-LD Schema
  const schemaJsonLD = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi",
    "alternateName": "Shivaji Co-operative Society",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/src/assets/logo.jpg`,
    "telephone": "+918861495090",
    "email": "chathrapathishivaji@yahoo.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Karthik Towers, Near District Court",
      "addressLocality": "Udupi",
      "addressRegion": "Karnataka",
      "postalCode": "576101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.344062,
      "longitude": 74.743126
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
      "opens": "09:30",
      "closes": "17:30"
    },
    "sameAs": [
      "https://wa.me/8861495090"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/src/assets/logo.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/src/assets/logo.jpg`} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaJsonLD)}
      </script>
    </Helmet>
  );
};
