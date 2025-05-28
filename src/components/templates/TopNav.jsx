import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from "/noim.png"

const TopNav = () => {
  const [val, setVal] = useState("");

  const [search, setSearch] = useState([]);

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${val}`);
      setSearch(data.results);
    } catch (err) {
      console.log("Error fetching search results:", err);
    }
  };

  useEffect(() => {
    GetSearch();
  }, [val]);

  return (
    <div className="w-[80%] h-[8vh] mx-auto relative flex items-center ">
      <i className="text-xl text-[#AAAAAA] ri-search-2-line"></i>

      <input
        onChange={(e) => setVal(e.target.value)}
        value={val}
        type="text"
        placeholder="Search"
        className="w-[60%] mx-10 p-5 outline-none border-none bg-transparent text-[#AAAAAA]"
      />
      {val.length > 0 && (
        <i
          onClick={() => setVal("")}
          className=" right-0 text-xl text-[#AAAAAA] ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[65%] max-h-[50vh] top-[100%] left-[6%] rounded overflow-auto bg-zinc-200">
        {search.map((s, i) => (
            <Link
              key={i}
              className="flex justify-start items-center border-b-1 p-7 w-[100%] text-zinc-600 font-semibold border-white hover:bg-[#AAAAAA] hover:text-black transition-all duration-300 ease-in-out"
            >
              <img className="w-[10vh] h-[10vh] object-cover rounded mr-6 shadow-lg" src={ s.backdrop_path || s.profile_path || s.poster_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path || s.poster_path}`: noimg } alt="" />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopNav;
