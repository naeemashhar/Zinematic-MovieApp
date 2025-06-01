import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className=" w-[20%] h-full border-r-1 p-10 border-[#AAAAAA] ">
      <h1>
        <i className="text-[#6C5CE7] text-3xl mr-2 ri-zcool-fill "></i>

        <span
          style={{
            textShadow: " 0 2px 4px rgba(0, 0, 0, 0.6)",
          }}
          className="oxanium  text-4xl text-white font-bold "
        >
          Zinematic.
        </span>
      </h1>

      <nav className="oxanium-l  flex flex-col text-lg gap-3 text-[#AAAAAA] ">
        <h1 className="text-white font-semibold text-xl mt-8 mb-3">
          New Feeds
        </h1>

        <Link to={"/trending"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-fire-fill"></i>Trending
        </Link>
        <Link to={"/popular"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-sparkling-2-fill"></i>Popular
        </Link>
        <Link to={"/movie"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-clapperboard-fill"></i>Movies
        </Link>
        <Link to={"/tvShow"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-tv-2-fill"></i>TV Shows
        </Link>
        <Link to={"/persons"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-user-search-fill"></i>People
        </Link>
      </nav>

      <hr className="border-none mt-1 h-[1px] bg-[#AAAAAA]" />

      <nav className="oxanium-l  flex flex-col text-lg gap-3 text-[#AAAAAA]">
        <h1 className="text-white font-semibold text-xl mt-6 mb-1">
          Website Information
        </h1>

        <Link to={"/about"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-information-2-fill"></i>About
        </Link>
        <Link to={"/contact-us"} className="p-3 rounded-md hover:bg-[#6C5CE7] hover:text-white duration-300 hover:scale-105">
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
