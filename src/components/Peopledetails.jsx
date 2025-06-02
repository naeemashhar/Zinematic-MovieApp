import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
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
    <div className="px-[6%] w-screen h-fit bg-[#0B0B0E]">
      {/*p-1 navigation */}
      <nav className="w-full h-[10vh] text-zinc-300 text-xl gap-10 flex items-center ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6c5ce7] ri-arrow-left-line"
        ></Link>
      </nav>

      {/* details */}
      <div className="w-full flex ">
        {/*p-2 left-side details */}
        <div className="w-[20%] overflow-hidden ">
          <img
            className=" h-[41vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
            src={info.details.profile_path ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}`:noimg}
            alt=""
          />
          <hr className="mt-5 mb-2 border-1 text-zinc-200" />

          {/* social-media */}
          <div className="text-white text-[1.5vw] flex gap-x-4 ">
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

          {/* personal-info */}
          <h1 className="Poppins-SemiBold text-xl my-3 text-[#AAAAAA]">
            Personal Information
          </h1>

          <h1 className="Poppins-Medium text-lg text-[#AAAAAA]">Known For :</h1>
          <h1 className="Poppins-Regular text-[#AAAAAA]">
            {info.details.known_for_department}
          </h1>

          <h1 className="Poppins-Medium text-lg mt-2 text-[#AAAAAA]">
            Gender :
          </h1>
          <h1 className="Poppins-Regular text-[#AAAAAA]">
            {info.details.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="Poppins-Medium text-lg mt-2 text-[#AAAAAA]">
            Birthday :
          </h1>
          <h1 className="Poppins-Regular text-[#AAAAAA]">
            {info.details.birthday}
          </h1>

          <h1 className="Poppins-Medium text-lg mt-2 text-[#AAAAAA]">
            Place of Birth :
          </h1>
          <h1 className="Poppins-Regular text-[#AAAAAA]">
            {info.details.place_of_birth}
          </h1>

          <h1 className="Poppins-Medium text-lg mt-2 text-[#AAAAAA]">
            Death-Day :
          </h1>
          <h1 className="Poppins-Regular text-[#AAAAAA]">
            {info.details.deathday ? info.details.deathday : "Alive"}
          </h1>

          <h1 className="Poppins-Medium text-lg mt-2 text-[#AAAAAA]">
            Also Known As :
          </h1>
          <h1 className="Poppins-Regular text-[#AAAAAA]">
            {info.details.also_known_as.join(", ")
              ? info.details.also_known_as.join(", ")
              : "None"}
          </h1>
        </div>

        {/*p-3 right-side details */}
        <div className="w-[80%] ml-[4%] text-white">
          <h1 className="font-black text-6xl my-3 text-[#AAAAAA]">
            {info.details.name}
          </h1>

          <h1 className="poppins-medium text-xl text-[#AAAAAA]">Biography </h1>
          <p className="text-[#AAAAAA] text-sm mt-3 mb-3">
            {info.details.biography}
          </p>

          <h1 className="poppins-medium text-lg text-[#AAAAAA] py-[2%]">
            Credits
          </h1>
          <HorizontalCards data={info.combinedcredits.cast} />

          <div className="w-full flex justify-between ">
            <h1 className="poppins-medium text-lg text-[#AAAAAA] py-[2%]">
              Acting
            </h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 mb-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.1)] p-5 border-1 border-zinc-800">
            {info[category + "credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-black  transition-all cursor-pointer p-3 hover:bg-[#AAAAAA] text-white rounded"
              >
                <Link to={`/${category}/details/${c.id}`} className="mb-5">
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="ml-5 block">
                    {c.character && `Character Name : ${c.character}`}
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
