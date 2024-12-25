import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Cellerite",
  tagline: "Top-quality Hardware Tools",
  description: "Cellerite Systems specializes in delivering end-to-end solutions for smart battery management, efficient EV charging, and seamless integration of renewable energy systems.",
  description_short: "Cellerite offers top-tier battery charger, telematics, renewable energy batteries to meet all your project needs.",
  url: "https://cellerite.com/",
  author: "Balaji B",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Battery management, battery charging, telematics`,
  description: "Cellerite Systems specializes in delivering end-to-end solutions for smart battery management, efficient EV charging, and seamless integration of renewable energy systems.. Start exploring now!",
  image: ogImageSrc,
};
