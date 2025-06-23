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
    <div className="min-h-screen px-4 py-10 sm:px-8 md:p-20 lg:p-20">
      <div className="p-4 mx-auto max-w-7xl sm:p-8 md:p-12 bg-gradient-to-br from-purple-100 to-pink-50 bg-opacity-70 rounded-3xl">
        <h1 className="mb-8 text-4xl font-black tracking-tight text-black sm:mb-10 md:mb-12 sm:text-5xl md:text-6xl lg:text-7xl font-mundial-demi">
          Contact Us
        </h1>

        {/* Contact Info Cards */}
        <div className="mb-8 space-y-4 sm:mb-10 md:mb-12">
          <div className="flex flex-col items-start justify-between gap-2 p-4 border-[1.5px] sm:flex-row sm:items-center sm:p-6 rounded-2xl sm:gap-0">
            <div className="flex-1 text-base font-medium text-black sm:text-lg md:text-xl">
              London
            </div>
            <div className="flex-1 text-base font-medium text-center text-black sm:text-lg md:text-xl">
              020 3908 4428
            </div>
            <div className="flex-1 text-base font-medium text-right text-black sm:text-lg md:text-xl">
              london@netdreams.co.uk
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-2 p-4 border-[1.5px] sm:flex-row sm:items-center sm:p-6 rounded-2xl sm:gap-0">
            <div className="flex-1 text-base font-medium text-black sm:text-lg md:text-xl">
              Richmond
            </div>
            <div className="flex-1 text-base font-medium text-center text-black sm:text-lg md:text-xl">
              020 8948 5808
            </div>
            <div className="flex-1 text-base font-medium text-right text-black sm:text-lg md:text-xl">
              richmond@netdreams.co.uk
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-gray-700 sm:text-lg"
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
              className="w-full px-3 py-3 text-base text-black bg-white border-[1.5px] sm:px-4 sm:py-4 sm:text-lg bg-opacity-80 rounded-xl focus:outline-none focus:border-pink-500"
              placeholder="Name *"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-base font-medium text-gray-700 sm:text-lg"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-3 text-base text-black bg-white border-[1.5px] sm:px-4 sm:py-4 sm:text-lg bg-opacity-80 rounded-xl focus:outline-none focus:border-pink-500"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray-700 sm:text-lg"
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
              className="w-full px-3 py-3 text-base text-black bg-white border-[1.5px] sm:px-4 sm:py-4 sm:text-lg bg-opacity-80 rounded-xl focus:outline-none focus:border-pink-500"
              placeholder="Email *"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-base font-medium text-gray-700 sm:text-lg"
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
              className="w-full px-3 py-3 text-base text-black bg-white border-[1.5px] resize-none sm:px-4 sm:py-4 sm:text-lg bg-opacity-80 rounded-xl focus:outline-none focus:border-pink-500 min-h-32 sm:min-h-40"
              placeholder="Message *"
            />
          </div>

          <div className="flex items-start gap-2 mb-2 sm:gap-3 sm:mb-6">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
              className="flex-shrink-0 w-4 h-4 mt-1 accent-gray-800"
            />
            <label
              htmlFor="newsletter"
              className="text-sm leading-relaxed sm:text-base"
            >
              Sign up to our newsletter
            </label>
          </div>

          <div className="mb-8 text-xs leading-relaxed sm:mb-6 sm:text-sm">
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
            className="inline-flex items-center gap-2 px-10 py-5 mt-8 text-base font-medium text-white transition-all duration-200 bg-black rounded-full hover:bg-transparent hover:text-black border-[1.5px] border-black"
          >
            Submit
            <span className="text-base">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
