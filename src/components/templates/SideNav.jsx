import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/trending", icon: "ri-fire-fill", label: "Trending" },
    { to: "/popular", icon: "ri-sparkling-2-fill", label: "Popular" },
    { to: "/movie", icon: "ri-clapperboard-fill", label: "Movies" },
    { to: "/tvShow", icon: "ri-tv-2-fill", label: "TV Shows" },
    { to: "/persons", icon: "ri-user-search-fill", label: "People" },
  ];

  const infoLinks = [
    { to: "/about", icon: "ri-information-2-fill", label: "About" },
    { to: "/contact-us", icon: "ri-phone-fill", label: "Contact Us" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-xl transition-all duration-300 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <div className="space-y-1.5">
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition duration-300 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 md:w-[20%] bg-blur-2xl backdrop-blur-lg border-r border-[#AAAAAA]/30 p-6 md:p-10 transition-transform duration-300 shadow-lg`}
      >
        {/* Logo */}
        <div className="flex items-center mb-8 mt-7 lg:mt-0">
          <i className="text-[#6C5CE7] text-3xl mr-2 ri-zcool-fill"></i>
          <span
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }}
            className="text-white text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Zinematic.
          </span>
        </div>

        {/* Navigation Section */}
        <div className="text-[#AAAAAA] space-y-2 text-base md:text-lg">
          <h2 className="text-white font-semibold text-lg md:text-xl mb-3">
            New Feeds
          </h2>
          {navItems.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-[#6C5CE7]/90 hover:text-white transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              <i className={`${icon}`}></i>
              {label}
            </Link>
          ))}
        </div>

        <hr className="my-6 border-[#AAAAAA]/30" />

        {/* Info Section */}
        <div className="text-[#AAAAAA] space-y-2 text-base md:text-lg">
          <h2 className="text-white font-semibold text-lg md:text-xl mb-3">
            Website Information
          </h2>
          {infoLinks.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-[#6C5CE7]/90 hover:text-white transition-all duration-200"
              onClick={() => setOpen(false)}
            >
              <i className={`${icon}`}></i>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default SideNav;
