import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Brand Strategy", href: "/services/brand-strategy" },
    { name: "UX Design", href: "/services/ux-design" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: "instagram.svg" },
    { name: "Twitter", href: "#", icon: "twitter.svg" },
    { name: "LinkedIn", href: "#", icon: "linkedin.svg" },
    { name: "Dribbble", href: "#", icon: "dribbble.svg" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Contact Section */}
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let's work together
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Ready to transform your digital presence? Get in touch with our
              team to start your next project.
            </p>
            <Button className="px-8 py-6 mt-8 text-sm text-black transition-colors duration-300 bg-white rounded-full hover:bg-gray-100">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:mt-0">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-sm font-semibold text-white">Email Us</h3>
                <p className="mt-1 text-gray-300">hello@example.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-sm font-semibold text-white">Call Us</h3>
                <p className="mt-1 text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="text-sm font-semibold text-white">Visit Us</h3>
                <p className="mt-1 text-gray-300">
                  123 Design Street, Creative City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="px-6 py-12 bg-gradient-to-b from-transparent to-black/40">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <img src="/logo.svg" alt="Company Logo" className="h-8" />
              <p className="max-w-md mt-4 text-sm text-gray-400">
                We create digital experiences that help brands connect with
                their audience and achieve their goals.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Navigation</h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
              <div className="flex gap-6">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">{item.name}</span>
                    <img
                      src={`/icons/${item.icon}`}
                      alt={item.name}
                      className="w-5 h-5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
