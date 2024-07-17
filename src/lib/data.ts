interface NavLinks {
  id: number;
  title: string;
  route: string;
}

interface CookieData {
  id: number;
  title: string;
  description: string;
}

const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "Features",
    route: "#features",
  },
  {
    id: 2,
    title: "Testimonials",
    route: "testimonials",
  },
  {
    id: 3,
    title: "Pricing",
    route: "pricing",
  },
  {
    id: 4,
    title: "About Us",
    route: "about",
  },
  {
    id: 5,
    title: "Log In",
    route: "login",
  },
];

const footerLinks: NavLinks[] = [
  {
    id: 1,
    title: "Terms",
    route: "terms",
  },
  {
    id: 2,
    title: "Privacy",
    route: "privacy",
  },
  {
    id: 3,
    title: "Cookies",
    route: "cookies",
  },
  {
    id: 4,
    title: "User Agreement",
    route: "user",
  },
  {
    id: 5,
    title: "Mission",
    route: "mission",
  },
];

const cookieData: CookieData[] = [
  {
    id: 1,
    title: "Session Management",
    description:
      " Cookies help manage user sessions by storing session identifiers. This allows users to log in and navigate through the site without needing to re-authenticate on each page.",
  },
  {
    id: 2,
    title: "Personalization",
    description:
      " Cookies enable websites to remember user preferences and settings. For example, they can store language preferences, font sizes, and other customizable aspects of the site, providing a tailored browsing experience.",
  },
  {
    id: 3,
    title: "Tracking and Analytics",
    description:
      " Cookies are used to track user behavior on the site. They collect data on how visitors interact with the site, such as pages visited, time spent on each page, and links clicked. This information is valuable for understanding user engagement and improving the site's content and usability.",
  },
  {
    id: 4,
    title: "Marketing and Advertising",
    description:
      "Cookies help in delivering personalized advertisements to users based on their browsing history and interests. They also assist in measuring the effectiveness of marketing campaigns by tracking user responses to ads",
  },
  {
    id: 5,
    title: "Authentication",
    description:
      "Cookies store authentication tokens for users who log in to the site. This ensures that users remain logged in as they navigate through different pages, enhancing the user experience.",
  },
  {
    id: 6,
    title: "Security",
    description:
      " Some cookies are used to enhance security by detecting and preventing fraudulent activities. For instance, they can help identify unusual login patterns or protect against cross-site request forgery (CSRF) attacks.",
  },
  {
    id: 7,
    title: "Performance",
    description:
      "  Cookies can store information that helps improve the performance of the website. For example, they can cache certain elements of the site, reducing the need for repeated downloads and speeding up page load times.",
  },
  {
    id: 8,
    title: "Compliance and Consent Management",
    description:
      "Cookies are often used to manage user consent for data collection and to ensure compliance with data protection regulations like GDPR and CCPA. They store records of user consent choices and help websites respect those choices.",
  },
];

export { navLinks, footerLinks, cookieData };
