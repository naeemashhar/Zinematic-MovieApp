import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full mx-[5%] flex flex-wrap px-[5%] py-[2%] bg-[#0B0B0E]">
      {data.map((c, i) => {
        return (
          <Link key={i} className="w-[25vh] mr-[5%] mb-[5%]">
            <img
              className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path
              }`}
              alt=""
            />

            <div className="flex justify-center ">
              <h1 className="poppins-regular text-[1.3vw] text-[#AAAAAA] mt-3  hover:text-[#6c5ce7] hover:poppins-medium hover:scale-95 transition-all duration-300 ">
                {c.name || c.title || c.original_name || c.original_title}
              </h1>

              <div className="hover:scale-95 transition-all duration-300 hover:poppins-medium">
                <h1 className="poppins-semibold text-[1.3vw] ml-10 text-yellow-500 mt-3">
                  {c.vote_average && c.vote_average !== 0
                    ? c.vote_average.toFixed(1)
                    : <h1 className="text-lg">N/A</h1>}
                </h1>
                <h3 className="poppins-regular text-xs ml-10 text-yellow-500 ">
                  Rating
                </h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
