"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import MAP_STYLE from "@/lib/styles.json";

export const GetInTouch = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full pt-40 overflow-hidden">
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="relative w-2/3 h-32 translate-y-20 xs:w-1/2 xs:h-40 sm:w-1/3 sm:h-48 md:w-2/4 md:h-2/4 lg:w-3/4 lg:h-3/4 translate-x-28">
          <Image
            src="/images/lc.webp"
            alt="Lets Chat Foreground"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative items-center justify-center hidden w-full md:flex">
            <div className="relative flex items-center justify-center w-full h-52 lg:h-72 xl:h-96">
              <Image
                src="/images/git.svg"
                alt="Get In Touch Desktop"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute  md:top-20  xl:top-32 lg:top-32 right-[8%] md:right-[12%] lg:right-[15%] xl:right-[18%] ">
                <Image
                  src="/images/message-bubble.svg"
                  alt="Message Bubble"
                  width={80}
                  height={30}
                  className="h-48 w-72 "
                  priority
                />
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <div className="relative flex items-center justify-center w-full h-32 max-w-xs sm:h-40 xs:max-w-sm">
              <Image
                src="/images/git-mobile.svg"
                alt="Get In Touch Mobile"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add form validation or API call here
  };

  return (
    <div className="min-h-screen px-4 py-10 sm:px-8 md:p-20 lg:p-20">
      <div className="p-8 mx-auto max-w-7xl bg-gradient-to-br from-purple-100 to-pink-50 bg-opacity-70 rounded-3xl">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-black sm:mb-10 md:mb-12 sm:text-5xl md:text-5xl lg:text-6xl font-mundial-demi">
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
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
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

          <div className="flex items-start gap-2 sm:gap-3 ">
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

          <div className="text-xs leading-relaxed sm:mb-6 sm:text-sm">
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
            type="submit"
            className="inline-flex items-center gap-2 px-10 py-5 mt-8 text-base font-medium text-white transition-all duration-200 bg-black rounded-full hover:bg-transparent hover:text-black border-[1.5px] border-black"
          >
            Submit
            <span className="text-base">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

// Google Maps Component
const GoogleMapComponent = ({ selectedOffice }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const offices = {
    Richmond: {
      lat: 51.4613,
      lng: -0.3037,
      address: "56 Kew Road, Richmond, Surrey, TW9 2PQ",
    },
    "South Bank": {
      lat: 51.5074,
      lng: -0.11,
      address: "30 Stamford Street, London, SE1 9PY",
    },
    "Tottenham Ct Rd": {
      lat: 51.5198,
      lng: -0.1343,
      address: "85 Tottenham Ct Rd, London, W1T 4TQ",
    },
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCqwff104MGygd5jbcqjzVu8fMP7pp6M8I&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  useEffect(() => {
    if (map && selectedOffice) {
      const office = offices[selectedOffice];
      if (office) {
        map.setCenter({ lat: office.lat, lng: office.lng });
        map.setZoom(15);

        // Clear existing markers
        markers.forEach((marker) => marker.setMap(null));

        // Add new marker
        const marker = new window.google.maps.Marker({
          position: { lat: office.lat, lng: office.lng },
          map: map,
          title: selectedOffice,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#000000",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });

        setMarkers([marker]);
      }
    }
  }, [map, selectedOffice]);

  const initializeMap = () => {
    if (mapRef.current) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 51.4613, lng: -0.3037 },
        zoom: 15,
        styles: MAP_STYLE,
        disableDefaultUI: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        controlSize: 32,
      });
      setMap(mapInstance);
    }
  };

  return (
    <div
      ref={mapRef}
      className="w-full h-full overflow-hidden min-h-96 rounded-2xl"
      style={{ minHeight: "400px" }}
    />
  );
};

export const OfficeDirections = () => {
  const [selectedOffice, setSelectedOffice] = useState("Richmond");

  const offices = [
    {
      name: "Richmond",
      address: "56 Kew Road, Richmond, Surrey, TW9 2PQ, 020 8948 5808",
      bgColor: "bg-lime-200",
    },
    {
      name: "South Bank",
      address: "30 Stamford Street, London, SE1 9PY, 020 3908 4428",
      bgColor: "bg-white",
    },
    {
      name: "Tottenham Ct Rd",
      address: "85 Tottenham Ct Rd, London, W1T 4TQ",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="px-4 py-10">
      <div className="mx-auto">
        <h1 className="mb-8 text-4xl font-black tracking-tight text-black sm:mb-12 sm:text-5xl md:text-5xl lg:text-6xl font-mundial-demi">
          Office Directions
        </h1>

        <div className="space-y-8">
          {/* Office List */}
          <div className="space-y-4">
            {offices.map((office) => (
              <div
                key={office.name}
                className={`${
                  office.bgColor
                } border-[1.5px] border-black rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedOffice === office.name ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedOffice(office.name)}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-black">
                      {office.name}
                    </h3>
                    <p className="text-base font-medium text-black">
                      {office.address}
                    </p>
                  </div>
                  <div className="ml-4">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map Container */}
          <div className="relative">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <GoogleMapComponent selectedOffice={selectedOffice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <GetInTouch />
      <ContactForm />
      <OfficeDirections />
    </div>
  );
};

export default ContactPage;
