import React from "react";
import { services } from "@/constants/services";

export const ServicesDropdown = () => {
  return (
    <div className="w-full p-2 md:p-3 lg:p-5 xl:p-5 rounded-2xl bg-[#1d2027]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="block p-4 text-white transition-colors duration-200 sm:p-6 group "
              tabIndex={0}
            >
              <div className="mb-3 sm:mb-4">{service.icon}</div>
              <div className="mb-2">
                <h3 className="relative inline-block text-sm font-bold leading-tight text-white sm:text-base">
                  {service.title}
                  <span
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left transform"
                    aria-hidden="true"
                  />
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
