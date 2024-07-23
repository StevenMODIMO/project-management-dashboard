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

interface FeatureDetail {
  id: number;
  feature: string;
}

interface FeaturesTypes {
  id: number;
  title: string;
  features: FeatureDetail[];
}

interface PricingTypes {
  id: number;
  title: string;
  description: string;
  price: number;
  features: FeatureDetail[];
}

const pricing: PricingTypes[] = [
  {
    id: 1,
    title: "Basic",
    description: "For small teams and exploration of the platform.",
    price: 0,
    features: [
      {
        id: 1,
        feature: "Basic support",
      },
      {
        id: 2,
        feature: "Basic Analytics",
      },
      {
        id: 3,
        feature: "Usage limits",
      },
      {
        id: 4,
        feature: "Access to basic templates",
      },
      {
        id: 5,
        feature: "Free trials feature access",
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    description: "For small teams, individuals and large teams.",
    price: 10,
    features: [
      {
        id: 1,
        feature: "Basic support",
      },
      {
        id: 2,
        feature: "Advanced Analytics",
      },
      {
        id: 3,
        feature: "Custom limits",
      },
      {
        id: 4,
        feature: "Access to advanced templates",
      },
      {
        id: 5,
        feature: "Limited AI access",
      },
      {
        id: 6,
        feature: "Custom branding",
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description: "For companies looking to upscale their effort.",
    price: 25,
    features: [
      {
        id: 1,
        feature: "Basic support",
      },
      {
        id: 2,
        feature: "Advanced Analytics",
      },
      {
        id: 3,
        feature: "No limits",
      },
      {
        id: 4,
        feature: "Access to advanced templates",
      },
      {
        id: 5,
        feature: "Consulting services",
      },
      {
        id: 6,
        feature: "Custom features",
      },
      {
        id: 7,
        feature: "Unlimited AI access",
      },
    ],
  },
];

const features: FeaturesTypes[] = [
  {
    id: 1,
    title: "Task management",
    features: [
      { id: 1, feature: "Create, assign, and prioritize tasks" },
      { id: 2, feature: "Track progress with status updates" },
      { id: 3, feature: "Set due dates and reminders" },
    ],
  },
  {
    id: 2,
    title: "Collaboration tools",
    features: [
      { id: 1, feature: "Team chat and messaging" },
      { id: 2, feature: "File sharing and storage" },
      { id: 3, feature: "Commenting on tasks and projects" },
    ],
  },
  {
    id: 3,
    title: "Project planning",
    features: [
      { id: 1, feature: "Gantt charts and timeline" },
      { id: 2, feature: "Milestones and deadlines" },
      { id: 3, feature: "Resource allocation" },
    ],
  },
  {
    id: 4,
    title: "Reporting and Analytics",
    features: [
      { id: 1, feature: "Customizable reports" },
      { id: 2, feature: "Dashboards with key metrics" },
      { id: 3, feature: "Performance analytics" },
    ],
  },
];

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

export { navLinks, footerLinks, cookieData, features, pricing };
