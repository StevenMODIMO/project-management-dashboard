interface NavLinks {
  id: number;
  title: string;
  route: string;
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

export { navLinks };
