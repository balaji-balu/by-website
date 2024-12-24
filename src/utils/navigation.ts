// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  // { name: "Products", url: "/products" },
  { name: "Battery Charging", url: "/charging" },
  { name: "Telematics", url: "/telematics" },
  // { name: "Services", url: "/services"},
  // { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Solutions",
    links: [
      // { name: "Documentation", url: "/welcome-to-docs/" },
      // { name: "Tools & Equipment", url: "/products" },
      { name: "Battery Charging", url: "/charging" },
      { name: "Telematics", url: "/telematics" },
      // { name: "Engineering Services", url: "/services" },
    ],
  },
  {
  section: "Services",
    links: [
      // { name: "Documentation", url: "/welcome-to-docs/" },
      // { name: "Tools & Equipment", url: "/products" },
      { name: "Battery Design", url: "#" },
      { name: "Embedded and IoT", url: "#" },
      { name: "Renewable Energy", url: "" },
    ],
  },
  // {
  //   section: "Company",
  //   links: [
  //     // { name: "About us", url: "/about" },
  //     { name: "Contact us", url: "/contact" },
  //     // { name: "Blog", url: "/blog" },
  //     // { name: "Careers", url: "#" },
  //     // { name: "Customers", url: "#" },
  //   ],
  // },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/cellerite/",
  linkedin: "https://in.linkedin.com/company/cellerite-systems",
  x: "https://twitter.com/cellerite_sys",
  // github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};