import Header from "@/components/layout/header";
import GridBackground from "@/components/grid-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <GridBackground />
      <Header />

      <main className="relative z-10 px-6 md:px-10 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business
              thrive in the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
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
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm p-8 rounded-lg"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button
                  variant="outline"
                  className="group-hover:bg-gray-900 group-hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
