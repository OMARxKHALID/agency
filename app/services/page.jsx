import Header from "@/components/layout/header";
import GridBackground from "@/components/grid-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <GridBackground />
      <Header />

      <main className="relative z-10 px-6 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl md:mb-6">
              Our Services
            </h1>
            <p className="max-w-3xl mx-auto text-base text-gray-600 md:text-xl">
              We offer comprehensive digital solutions to help your business
              thrive in the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 mb-20 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {[
              {
                title: "Web Design",
                description:
                  "Creative and user-focused web design that captures your brand essence",
                icon: "🎨",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                title: "Web Development",
                description:
                  "Robust and scalable web development using cutting-edge technologies",
                icon: "💻",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "eCommerce",
                description:
                  "Powerful eCommerce solutions that drive sales and customer engagement",
                icon: "🛒",
                gradient: "from-pink-500 to-orange-500",
              },
              {
                title: "SEO Optimization",
                description:
                  "Strategic SEO to improve your search rankings and organic traffic",
                icon: "📈",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Brand Strategy",
                description:
                  "Comprehensive brand development and strategic positioning",
                icon: "🎯",
                gradient: "from-green-500 to-blue-500",
              },
              {
                title: "Support & Maintenance",
                description:
                  "Ongoing support and maintenance to keep your website running smoothly",
                icon: "🔧",
                gradient: "from-blue-500 to-green-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 border-0 rounded-lg group hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="transition-colors group-hover:bg-gray-900 group-hover:text-white"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
