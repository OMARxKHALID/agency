import {
  ArrowRight,
  Figma,
  Smartphone,
  Monitor,
  Shield,
  BarChart3,
  Settings,
  Headphones,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <div className="min-h-screen -mt-[100vh]">
      <section className="relative px-6 py-16 mb-16 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 lg:px-12 lg:py-24 lg:mb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-schibsted-black md:mb-6">
                  Our Services
                </h1>
                <p className="max-w-3xl mx-auto text-base text-gray-600 md:text-xl font-mundial-regular">
                  Our website design team are dedicated to creating unique,
                  visually compelling brands and websites that connect with your
                  target audience. From brand strategy, planning and execution
                  to website design and development, we use our creative and
                  strategic thinking to deliver a powerful visual identity that
                  makes you unique.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    Creative website design
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    Brand design & strategy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    User experiences & journey planning
                  </span>
                </div>
              </div>

              <Button className="w-full px-10 py-8 text-sm text-white transition-colors duration-300 bg-black rounded-full shadow-lg md:w-auto font-mundial-demi">
                Let's Discuss Your Website
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-full h-96">
                <div className="absolute top-0 right-0 w-64 overflow-hidden h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute text-white bottom-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-white/20">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute z-10 max-w-xs p-6 shadow-lg top-16 left-8 bg-white/90 backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Figma className="w-6 h-6 text-purple-600" />
                    <div className="text-xs tracking-wide text-gray-600 uppercase">
                      Digital Solutions
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl text-gray-900 font-mundial-bold">
                    WE CREATE
                    <br />
                    DIGITAL THINGS
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 z-10 max-w-xs p-6 bg-yellow-400 shadow-lg rounded-2xl">
                  <h3 className="mb-2 font-bold text-gray-900">We Deliver</h3>
                  <h2 className="mb-4 text-lg font-bold text-gray-900">
                    Growth Through Innovation
                  </h2>
                  <Button className="w-full px-10 py-8 text-sm text-white transition-colors duration-300 bg-black rounded-full shadow-lg md:w-auto font-mundial-demi">
                    Start
                  </Button>
                </div>

                {/* Photoshop icon */}
                <div className="absolute p-3 bg-blue-600 rounded-lg shadow-lg top-4 right-16">
                  <div className="text-sm font-bold text-white">Ps</div>
                </div>

                <div className="absolute p-3 rounded-lg shadow-lg top-32 right-4 bg-white/80 backdrop-blur-sm">
                  <Monitor className="w-5 h-5 text-blue-600" />
                </div>

                <div className="absolute p-3 rounded-lg shadow-lg bottom-20 right-8 bg-white/80 backdrop-blur-sm">
                  <Smartphone className="w-5 h-5 text-green-600" />
                </div>

                <div className="absolute w-8 h-8 bg-orange-400 rounded-full -top-4 left-4 opacity-80"></div>
                <div className="absolute w-6 h-6 bg-pink-400 rounded-full top-1/2 -right-4 opacity-70"></div>
                <div className="absolute w-10 h-10 bg-blue-500 rounded-full -bottom-4 right-1/3 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 mb-16 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 lg:px-12 lg:py-24 lg:mb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative w-full h-96">
                <div className="absolute top-0 left-0 max-w-xs p-6 shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl">
                  <div className="mb-3 text-2xl font-bold text-blue-600">
                    Meta
                  </div>
                  <div className="text-sm leading-relaxed text-gray-700">
                    People-Centric Approaches to AI Explainability
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    Insights that drive product and policy decisions...
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 text-white bg-blue-600 shadow-lg rounded-2xl">
                  <div className="mb-2 text-5xl font-bold">227</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                  <BarChart3 className="w-8 h-8 mt-4 opacity-80" />
                </div>

                <div className="absolute right-0 p-4 shadow-lg top-16 bg-white/90 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Online
                    </span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Development Status
                  </div>
                </div>

                <div className="absolute p-4 bg-orange-400 shadow-lg top-32 right-8 rounded-xl">
                  <div className="mb-1 text-sm font-bold text-gray-900">
                    API
                  </div>
                  <div className="text-xs text-gray-700">Integration Ready</div>
                </div>

                <div className="absolute p-4 shadow-lg bottom-16 right-4 bg-white/90 backdrop-blur-sm rounded-xl">
                  <Settings className="w-6 h-6 mb-2 text-gray-600" />
                  <div className="text-xs text-gray-600">Configuration</div>
                </div>

                <div className="absolute w-16 h-16 bg-blue-400 rounded-full -top-6 right-1/4 opacity-40"></div>
                <div className="absolute w-12 h-12 rounded-full top-1/3 -left-4 bg-cyan-400 opacity-60"></div>
                <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-50 -bottom-4 right-1/3"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                  Web Development
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Behind every beautiful website is a solid foundation of
                  functionality. UI Studio's website development infrastructure
                  that every pixel-perfect design is matched with seamless
                  functionality. Whether you need a simple brochure website, a
                  complex eCommerce platform, or an innovative web-based
                  application, we have the expertise to bring your vision to
                  life with robust, scalable, and secure web-based applications.
                </p>
              </div>

              <Button className="w-full px-10 py-8 text-sm text-white transition-colors duration-300 bg-black rounded-full shadow-lg md:w-auto font-mundial-demi">
                Schedule A Call With Our Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                  Everything Else
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                  Advanced web application security to protect your digital
                  assets.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    Ongoing maintenance & support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    Advanced web application development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    PPC campaign management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="font-medium text-gray-900">
                    Web app security
                  </span>
                </div>
              </div>

              <Button className="w-full px-10 py-8 text-sm text-white transition-colors duration-300 bg-black rounded-full shadow-lg md:w-auto font-mundial-demi">
                See How We Can Help
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-full h-96">
                <div className="absolute top-0 left-0 max-w-xs p-6 text-white bg-blue-600 shadow-lg rounded-2xl">
                  <div className="mb-2 text-2xl font-bold">Support</div>
                  <div className="mb-4 text-sm opacity-90">
                    24/7 Customer Care
                  </div>
                  <Headphones className="w-8 h-8 opacity-80" />
                </div>

                <div className="absolute right-0 p-6 shadow-lg top-16 bg-white/90 backdrop-blur-sm rounded-xl">
                  <div className="mb-1 text-3xl font-bold text-gray-900">
                    139%
                  </div>
                  <div className="text-sm text-gray-600">Growth Rate</div>
                  <div className="h-2 mt-3 bg-gray-200 rounded-full">
                    <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute p-4 shadow-lg bottom-16 left-8 bg-white/90 backdrop-blur-sm rounded-xl">
                  <Shield className="w-6 h-6 mb-2 text-green-600" />
                  <div className="text-sm font-medium text-gray-900">
                    Security
                  </div>
                  <div className="text-xs text-gray-600">Enterprise Grade</div>
                </div>

                <div className="absolute bottom-0 p-4 bg-yellow-400 shadow-lg right-8 rounded-xl">
                  <div className="mb-1 text-sm font-bold text-gray-900">
                    PPC
                  </div>
                  <div className="text-xs text-gray-700">Campaign Active</div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute p-3 rounded-lg shadow-lg top-32 left-16 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Monitoring</span>
                  </div>
                </div>

                <div className="absolute right-0 p-3 bg-blue-500 rounded-full shadow-lg bottom-32">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>

                <div className="absolute w-24 h-24 bg-blue-400 rounded-full -top-8 right-1/4 opacity-30"></div>
                <div className="absolute w-16 h-16 bg-green-400 rounded-full opacity-50 top-1/2 -right-6"></div>
                <div className="absolute w-20 h-20 bg-purple-400 rounded-full -bottom-6 left-1/4 opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
