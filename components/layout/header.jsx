"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ServicesDropdown } from "@/components/ui/services-dropdown";
import { services } from "@/constants/services";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/showcase", label: "Showcase" },
  { href: "", label: "Services", hasDropdown: true },
];

export function Header() {
  const { isScrolled } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const showDarkHeader = isScrolled;

  const logoVariant = showDarkHeader ? "dark" : "normal";
  const textColor = showDarkHeader ? "text-white" : "text-black";
  const navTextColor = showDarkHeader ? "text-white" : "text-black";

  return (
    <header
      className={cn(
        "fixed z-50 top-6 left-4 right-4 lg:top-6 lg:left-24 lg:right-24 transition-all duration-500"
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-out rounded-full border",
          showDarkHeader
            ? "bg-slate-900 shadow-xl border-slate-700/50"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex items-center justify-between px-4 py-2 mx-auto md:px-6 md:py-2 max-w-7xl">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo variant={logoVariant} className="w-10 h-10 transition-none" />
            <span
              className={cn(
                "text-3xl font-mundial-bold tracking-tight transition-colors duration-300",
                textColor
              )}
            >
              STUDIO
            </span>
          </Link>

          <nav className="items-center hidden gap-8 lg:flex">
            {navLinks.map(({ href, label, hasDropdown }) => {
              const isActive = pathname === href;

              if (hasDropdown) {
                return (
                  <div key={label} className="relative">
                    <span
                      className={cn(
                        "text-lg font-mundial-regular transition-colors relative overflow-hidden group px-1 cursor-pointer",
                        navTextColor
                      )}
                      onClick={() => setServicesDropdownOpen((open) => !open)}
                      tabIndex={0}
                    >
                      {label}
                      <span
                        className={cn(
                          "pointer-events-none absolute left-0 bottom-0 h-0.5 w-full bg-black transform transition-transform duration-300 origin-left",
                          servicesDropdownOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </span>
                    {servicesDropdownOpen && (
                      <div className="fixed z-50 p-4 transition-all duration-500 shadow-lg top-16 left-8 right-4 sm:top-20 sm:left-6 sm:right-6 md:top-24 md:left-14 md:right-14 lg:top-28 lg:left-24 lg:right-24 xl:top-28 xl:left-24 xl:right-24">
                        <ServicesDropdown />
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-lg font-mundial-regular transition-colors relative overflow-hidden group px-1",
                    navTextColor
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      "pointer-events-none absolute left-0 bottom-0 h-0.5 w-full bg-black transform transition-transform duration-300 origin-left",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
            <Link href="/contact">
              <Button className="py-8 text-lg text-white transition-colors bg-blue-600 rounded-full px-7 hover:bg-black font-mundial-demi ">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className={cn("h-8 w-8", textColor)} />
            ) : (
              <Menu className={cn("h-8 w-8", textColor)} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 mx-4 mt-2 border shadow-2xl top-full rounded-2xl border-slate-700/50 bg-slate-800/95 backdrop-blur-sm lg:hidden">
            <nav className="flex flex-col p-2 space-y-1">
              {navLinks.map(({ href, label, hasDropdown }) => {
                if (hasDropdown) {
                  return (
                    <div key={label} className="relative">
                      <button
                        className="flex items-center justify-between w-full px-6 py-4 text-lg transition-colors text-white/90 hover:bg-slate-700/50 font-mundial-demi rounded-xl"
                        onClick={() => setMobileServicesOpen((open) => !open)}
                      >
                        {label}
                        <span className="ml-2">
                          {mobileServicesOpen ? "▲" : "▼"}
                        </span>
                      </button>
                      {mobileServicesOpen && (
                        <div className="px-6 mt-2">
                          <ul className="flex flex-col gap-2">
                            {services.map((service) => (
                              <li key={service.href}>
                                <a
                                  href={service.href}
                                  className="block py-2 text-white/90 hover:underline"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={href}
                    href={href}
                    className="px-6 py-4 text-lg transition-colors text-white/90 hover:bg-slate-700/50 font-mundial-demi rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="flex items-center justify-between px-6 py-4 text-white transition-colors bg-blue-600 hover:bg-blue-700 font-mundial-demi rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
