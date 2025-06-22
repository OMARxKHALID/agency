"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section>
      <div className="px-40 py-32 mx-auto border border-black rounded-3xl border-opacity-10 bg-opacity-80">
        <div className="flex items-center justify-center min-h-screen bg-[#f0e6ff]">
          <div className="w-full max-w-6xl px-10 py-10 mx-auto">
            <h1 className="mb-10 font-extrabold text-black text-8xl tracking-tight leading-[0.9]">
              Contact Us
            </h1>

            <div className="mb-10">
              <div className="flex items-center justify-between p-8 mb-5 bg-white border border-black bg-opacity-60 border-opacity-10 rounded-2xl">
                <div className="flex-1 text-2xl font-normal text-black">
                  London
                </div>
                <div className="flex-1 text-2xl font-normal text-center text-black">
                  020 3908 4428
                </div>
                <div className="flex-1 text-2xl font-normal text-right text-black">
                  london@netdreams.co.uk
                </div>
              </div>

              <div className="flex items-center justify-between p-8 bg-white border border-black bg-opacity-60 border-opacity-10 rounded-2xl">
                <div className="flex-1 text-2xl font-normal text-black">
                  Richmond
                </div>
                <div className="flex-1 text-2xl font-normal text-center text-black">
                  020 8948 5808
                </div>
                <div className="flex-1 text-2xl font-normal text-right text-black">
                  richmond@netdreams.co.uk
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-normal text-gray-600"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-5 text-lg text-black transition-all duration-200 bg-white border border-black border-opacity-12 rounded-xl bg-opacity-70 focus:outline-none focus:border-black focus:border-opacity-20 focus:bg-white focus:bg-opacity-90"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-lg font-normal text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 text-lg text-black transition-all duration-200 bg-white border border-black border-opacity-12 rounded-xl bg-opacity-70 focus:outline-none focus:border-black focus:border-opacity-20 focus:bg-white focus:bg-opacity-90"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-normal text-gray-600"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-5 text-lg text-black transition-all duration-200 bg-white border border-black border-opacity-12 rounded-xl bg-opacity-70 focus:outline-none focus:border-black focus:border-opacity-20 focus:bg-white focus:bg-opacity-90"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-normal text-gray-600"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-5 text-lg text-black transition-all duration-200 bg-white border border-black resize-y border-opacity-12 rounded-xl bg-opacity-70 focus:outline-none focus:border-black focus:border-opacity-20 focus:bg-white focus:bg-opacity-90 min-h-40"
                />
              </div>

              <div className="flex items-start gap-3 mb-6">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                />
                <label
                  htmlFor="newsletter"
                  className="text-base font-normal leading-relaxed text-gray-600"
                >
                  Sign up to our newsletter
                </label>
              </div>

              <div className="mb-8 text-sm leading-relaxed text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                apply.
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Submit
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
