"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import MAP_STYLE from "@/lib/styles.json";
import { useGoogleMaps } from "@/hooks/use-google-maps";
import { OFFICES } from "@/constants/offices";
import { CONTACTS } from "@/constants/contacts";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const GetInTouch = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative w-full pt-64 overflow-hidden xl:pt-40 lg:pt-40 md:pt-40">
      <div className="absolute inset-0 z-20 items-center justify-center hidden pointer-events-none md:flex">
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
      <div className="absolute inset-0 z-30 flex pointer-events-none mt-28 md:hidden">
        <div className="relative w-full h-full">
          <div className="absolute top-0 w-full h-32 max-w-xs -translate-x-1/2 sm:h-40 xs:max-w-sm left-1/2">
            <Image
              src="/images/git-mobile.svg"
              alt="Get In Touch Mobile"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute w-4/5 h-32 -translate-x-1/2 left-1/2 top-6 xs:w-3/4 xs:h-40 sm:w-2/3 sm:h-48">
            <Image
              src="/images/lc.webp"
              alt="Lets Chat Foreground"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute right-[10%] top-8">
            <Image
              src="/images/message-bubble.svg"
              alt="Message Bubble"
              width={50}
              height={20}
              className="h-24 w-36"
              priority
            />
          </div>
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
              <div className="absolute md:top-20 xl:top-32 lg:top-32 right-[8%] md:right-[12%] lg:right-[15%] xl:right-[18%] ">
                <Image
                  src="/images/message-bubble.svg"
                  alt="Message Bubble"
                  width={80}
                  height={30}
                  className="h-48 w-72"
                  priority
                />
              </div>
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
  };

  return (
    <div className="min-h-screen px-4 py-10 sm:px-8 md:p-20 lg:p-20">
      <div className="p-8 mx-auto max-w-7xl bg-gradient-to-br from-purple-100 to-pink-50 bg-opacity-70 rounded-3xl">
        <h1 className="mb-6 text-4xl font-black tracking-tight text-black sm:mb-10 md:mb-12 sm:text-5xl md:text-5xl lg:text-6xl font-mundial-demi">
          Contact Us
        </h1>
        <div className="mb-8 space-y-4 sm:mb-10 md:mb-12">
          {CONTACTS.map((contact) => (
            <ContactInfoCard
              key={contact.city}
              city={contact.city}
              phone={contact.phone}
              email={contact.email}
            />
          ))}
        </div>
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <FormInput
            label="Name *"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name *"
          />
          <FormInput
            label="Phone Number"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
          <FormInput
            label="Email *"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Email *"
          />
          <FormTextarea
            label="Message *"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Message *"
          />
          <div className="flex items-start gap-2 sm:gap-3">
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

const ContactInfoCard = ({ city, phone, email }) => (
  <div className="flex flex-col items-start justify-between gap-2 p-4 border-[1.5px] sm:flex-row sm:items-center sm:p-6 rounded-2xl sm:gap-0">
    <div className="flex-1 text-base font-medium text-black sm:text-lg md:text-xl">
      {city}
    </div>
    <div className="flex-1 text-base font-medium text-center text-black sm:text-lg md:text-xl">
      {phone}
    </div>
    <div className="flex-1 text-base font-medium text-right text-black sm:text-lg md:text-xl">
      {email}
    </div>
  </div>
);

const FormInput = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-base font-medium text-gray-700 sm:text-lg"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-3 text-base text-black bg-white border-[1.5px] sm:px-4 sm:py-4 sm:text-lg bg-opacity-80 rounded-xl focus:outline-none focus:border-pink-500"
      placeholder={placeholder}
    />
  </div>
);

const FormTextarea = ({
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  placeholder,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-base font-medium text-gray-700 sm:text-lg"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      rows={6}
      className="w-full px-3 py-3 text-base text-black bg-white border-[1.5px] resize-none sm:px-4 sm:py-4 sm:text-lg bg-opacity-80 rounded-xl focus:outline-none focus:border-pink-500 min-h-32 sm:min-h-40"
      placeholder={placeholder}
    />
  </div>
);

const GoogleMap = ({ selectedOffice }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);
  const loaded = useGoogleMaps(GOOGLE_MAPS_API_KEY);

  const office = OFFICES.find((o) => o.name === selectedOffice);

  useEffect(() => {
    if (!loaded || !mapRef.current || mapInstance.current) return;
    mapInstance.current = new window.google.maps.Map(mapRef.current, {
      center: { lat: office.lat, lng: office.lng },
      zoom: 15,
      styles: MAP_STYLE,
      disableDefaultUI: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true,
      controlSize: 32,
      scrollwheel: false,
    });
  }, [loaded]);

  useEffect(() => {
    if (!loaded || !mapInstance.current || !office) return;
    const map = mapInstance.current;
    map.setCenter({ lat: office.lat, lng: office.lng });
    map.setZoom(15);
    if (markerRef.current) markerRef.current.setMap(null);
    markerRef.current = new window.google.maps.Marker({
      position: { lat: office.lat, lng: office.lng },
      map,
      title: office.name,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#000000",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
    });
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = null;
      }
    };
  }, [loaded, office]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full overflow-hidden min-h-96 rounded-2xl"
      style={{ minHeight: "600px" }}
    />
  );
};

export const OfficeDirections = () => {
  const [selectedOffice, setSelectedOffice] = useState(OFFICES[0].name);
  return (
    <div>
      <div className="relative py-5">
        <div className="px-4 py-4">
          <h1 className="mb-8 text-5xl ">Office Directions</h1>
          <div className="space-y-3 sm:space-y-1">
            {OFFICES.map((office) => {
              const isSelected = selectedOffice === office.name;
              return (
                <div
                  key={office.name}
                  className={`border bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-200
                    ${
                      isSelected
                        ? "bg-[linear-gradient(94deg,_#ebffb4_0%,_#adffdf_100%)] border-transparent"
                        : "border-gray-900"
                    }
                    flex flex-col sm:flex-row
                    px-4 py-4 sm:px-10 sm:py-6
                    gap-2 sm:gap-0
                    active:scale-[0.98]
                  `}
                  onClick={() => setSelectedOffice(office.name)}
                  style={
                    isSelected
                      ? {
                          background:
                            "linear-gradient(94deg, #ebffb4 0%, #adffdf 100%)",
                          borderColor: "transparent",
                        }
                      : {}
                  }
                >
                  <div className="flex-1 mb-2 sm:mb-0">
                    <h3 className="text-lg sm:text-2xl">{office.name}</h3>
                  </div>
                  <div className="flex-[2] text-left sm:text-center mb-2 sm:mb-0">
                    <p className="text-base sm:text-lg">{office.address}</p>
                  </div>
                  <div className="flex items-center justify-end flex-shrink-0 sm:ml-6">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <path
                        d="M24.25 25.5H6.75C6.04688 25.5 5.5 24.9531 5.5 24.25C5.5 23.625 6.04688 23 6.75 23H21.2031L0.8125 2.6875C0.34375 2.21875 0.34375 1.35938 0.8125 0.890625C1.28125 0.421875 2.14062 0.421875 2.60938 0.890625L23 21.2812V6.75C23 6.125 23.5469 5.5 24.25 5.5C24.875 5.5 25.5 6.125 25.5 6.75V24.25C25.5 24.9531 24.875 25.5 24.25 25.5Z"
                        fill="#193154"
                      ></path>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative mt-4">
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <GoogleMap selectedOffice={selectedOffice} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div>
    <GetInTouch />
    <ContactForm />
    <OfficeDirections />
  </div>
);

export default ContactPage;
