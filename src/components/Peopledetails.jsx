import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import noimg from "/noim.png";

const Peopledetails = () => {
  document.title = "Zinematic | Person | Details";

  const { id } = useParams();

  const { info } = useSelector((state) => state.people);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [category, setcategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      //clean up
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="px-[5%] w-screen h-fit bg-[#0B0B0E]">
      {/* Navigation */}
      <nav className="w-full h-[10vh] text-zinc-300 text-xl gap-10 flex items-center">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6c5ce7] ri-arrow-left-line"
        ></Link>
      </nav>

      {/* Details Container */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left-side details */}
        <div className="w-full lg:w-[25%]">
          <img
            className="w-full h-[50vh] object-cover shadow-lg hover:scale-95 transition-all duration-300"
            src={
              info.details.profile_path
                ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}`
                : noimg
            }
            alt=""
          />
          <hr className="mt-5 mb-2 border-1 text-zinc-200" />

          {/* Social Icons */}
          <div className="text-white text-2xl md:text-[1.5vw] flex gap-x-4 ">
            <a
              target="_blank"
              title="wiki"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill hover:text-[#6c5ce7] hover:scale-105 duration-300"></i>
            </a>

            <a
              target="_blank"
              title="facebook"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill hover:text-[#6c5ce7] hover:scale-105 duration-300"></i>
            </a>

            <a
              target="_blank"
              title="instagram"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-line hover:text-[#6c5ce7] hover:scale-105 duration-300"></i>
            </a>

            <a
              target="_blank"
              title="twitter"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill hover:text-[#6c5ce7] hover:scale-105 duration-300"></i>
            </a>

            <a
              target="_blank"
              title="IMDb"
              href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}
            >
              <i className="ri-information-2-fill hover:text-[#6c5ce7] hover:scale-105 duration-300"></i>
            </a>
          </div>

          {/* Personal Info */}
          <div className="mt-4 space-y-3 text-sm lg:text-base">
            <h1 className="Poppins-SemiBold text-lg text-[#AAAAAA]">
              Personal Information
            </h1>
            <p className="text-[#AAAAAA]">
              Known For: {info.details.known_for_department}
            </p>
            <p className="text-[#AAAAAA]">
              Gender: {info.details.gender === 2 ? "Male" : "Female"}
            </p>
            <p className="text-[#AAAAAA]">Birthday: {info.details.birthday}</p>
            <p className="text-[#AAAAAA]">
              Place of Birth: {info.details.place_of_birth}
            </p>
            <p className="text-[#AAAAAA]">
              Death-Day: {info.details.deathday || "Alive"}
            </p>
            <p className="text-[#AAAAAA]">
              Also Known As: {info.details.also_known_as.join(", ") || "None"}
            </p>
          </div>
        </div>

        {/* Right-side details */}
        <div className="w-full lg:w-[70%] text-white">
          <h1 className="font-black text-4xl lg:text-6xl my-3 text-[#AAAAAA]">
            {info.details.name}
          </h1>

          <h2 className="text-lg lg:text-xl text-[#AAAAAA]">Biography</h2>
          <p className="text-[#AAAAAA] text-sm mt-2 mb-4">
            {info.details.biography}
          </p>

          {/* Credits Section */}
          <h2 className="text-lg text-[#AAAAAA] py-2">Credits</h2>
          <HorizontalCards data={info.combinedcredits.cast} />

          {/* Acting + Dropdown */}
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-4 gap-4">
            <h2 className="text-lg text-[#AAAAAA]">Acting</h2>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          {/* Credit list */}
          <div className="list-disc text-zinc-400 w-full h-[40vh] lg:h-[50vh] mt-5 mb-5 overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.1)] p-5 border border-zinc-800 rounded-md">
            {info[category + "credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-black transition-all cursor-pointer p-3 hover:bg-[#AAAAAA] text-white rounded"
              >
                <Link to={`/${category}/details/${c.id}`} className="block">
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="ml-2 block text-sm">
                    {c.character && `Character Name: ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Peopledetails;
