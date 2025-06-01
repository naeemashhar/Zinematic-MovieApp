import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
    
     

      <div className="w-[100%] mb-4 p-3 flex  overflow-y-hidden ">
        {data.length > 0 ? data.map((d, i) => (
          
          <Link to={`/${d.media_type}/details/${d.id} `} key={i} className="min-w-[16%] h-[40vh] rounded overflow-hidden mr-5 mb-3 bg-zinc-900 hover:bg-[#6C5CE7] duration-300 hover:scale-95">
            <img
              className="w-full h-[55%]  object-cover shadow-lg "
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || d.poster_path
              })`}
              alt=""
            />

            <div className="text-white p-3 h-[45%] overflow-auto">
              <h1 className=" text-lg font-black ">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>

              <p className="text-sm mt-1">
                {d.overview.slice(0, 50)} ...
                <span className="text-zinc-500"> more </span>
              </p>
            </div>
          </Link>

        )): <h1 className="text-3xl text-white font-black text-center mt-5">No Data Found</h1> }
      </div>
    
  );
};

export default HorizontalCards;
