import {
  Grid3x3,
  Grid2x2,
  ChevronRight,
  ShoppingBag,
  BarChart3,
  Smartphone,
  Shield,
  Users,
} from "lucide-react";

export const services = [
  {
    icon: <Grid3x3 className="w-6 h-6 text-white stroke-2" />,
    title: "Creative Web Design",
    description: "Award winning, creative web design for leading brands",
    href: "/services/web-design",
  },
  {
    icon: <Grid2x2 className="w-6 h-6 text-white stroke-2" />,
    title: "Brand Design, Strategies & UX/UI",
    description:
      "Crafting unique, cohesive brand experiences that resonate with your audience",
    href: "/services/brand-design",
  },
  {
    icon: <ChevronRight className="w-6 h-6 text-white stroke-2" />,
    title: "Web Development",
    description: "Enterprise web development that's powerful and user friendly",
    href: "/services/web-development",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-white stroke-2" />,
    title: "eCommerce Development",
    description:
      "eCommerce web development engineered to maximises online sales",
    href: "/services/ecommerce",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white stroke-2" />,
    title: "Organic SEO",
    description: "Results driven organic SEO that drives traffic & converts",
    href: "/services/seo",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white stroke-2" />,
    title: "Web Based Applications",
    description: "Web based application development for mobile",
    href: "/services/web-based-applications",
  },
  {
    icon: <Shield className="w-6 h-6 text-white stroke-2" />,
    title: "Web App Security",
    description: "Ensuring your web apps are pen tested and secure",
    href: "/services/security",
  },
  {
    icon: <Users className="w-6 h-6 text-white stroke-2" />,
    title: "Website Support & Maintenance",
    description: "Priority support and maintenance for your website",
    href: "/services/support",
  },
];
