import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <main className="relative z-10 px-6 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl md:mb-6">
              Contact Us
            </h1>
            <p className="max-w-3xl mx-auto text-base text-gray-600 md:text-xl">
              Ready to start your project? Get in touch with our team and let's
              discuss your vision.
            </p>
          </div>

          <div className="grid gap-8 mb-20 md:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="mb-8 text-3xl font-bold">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full py-4 text-white bg-black hover:bg-gray-800">
                  Send Message <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="mb-8 text-3xl font-bold">Get in touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">020 3808 4438</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">hello@idstudio.co.uk</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Office</h3>
                    <p className="text-gray-600">London, United Kingdom</p>
                    <p className="text-sm text-gray-500">
                      Available for meetings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
