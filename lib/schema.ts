export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Spangler Heating & Cooling",
  "image": "https://www.spanglerhvac.com/logo.png",
  "@id": "https://www.spanglerhvac.com",
  "url": "https://www.spanglerhvac.com",
  "telephone": "231-839-2579",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6410 W Sanborn Rd",
    "addressLocality": "Lake City",
    "addressRegion": "MI",
    "postalCode": "49651",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.3857329,
    "longitude": -85.1979339
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Lake City"
    },
    {
      "@type": "City",
      "name": "Cadillac"
    },
    {
      "@type": "City",
      "name": "McBain"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Furnace Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air Conditioning Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boiler Service"
        }
      }
    ]
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}
