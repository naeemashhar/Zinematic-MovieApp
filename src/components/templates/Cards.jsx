import React from "react";
import { Link } from "react-router-dom";
import noimg from "/noim.png"


const Cards = ({ data, title }) => {
  return (
    <div className="w-full mx-[5%] flex flex-wrap px-[5%] py-[2%] bg-[#0B0B0E]">
      {data.map((c, i) => {
        return (
          <Link to={`/${c.media_type || title}/details/${c.id} `} key={i} className="relative w-[25vh] mr-[5%] mb-[5%]">
            <img
              className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
              src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`:noimg
            }
              alt=""
            />

            <div className="flex justify-center ">
              <h1 className="poppins-regular text-[1.3vw] text-[#AAAAAA] mt-3  hover:text-[#6c5ce7] hover:poppins-medium hover:scale-95 transition-all duration-300 ">
                {c.name || c.title || c.original_name || c.original_title}
              </h1>

              {typeof c.vote_average !== "undefined" && (
                <>
                  
                  <div className="hover:scale-95 transition-all duration-300 hover:poppins-medium">
                    <h1 className="poppins-semibold text-[1.3vw] ml-10 text-yellow-500 mt-3">
                      {c.vote_average !== 0 ? c.vote_average.toFixed(1) : "N/A"}
                    </h1>
                    <h3 className="poppins-regular text-xs ml-10 text-yellow-500 ">
                      Rating
                    </h3>
                  </div>

                  <div className="poppins-medium absolute right-[-10%] bottom-[45%] rounded-full text-lg font-semibold w-[6vh] h-[6vh] flex justify-center items-center shadow-lg bg-yellow-500  text-white">
                    {c.vote_average !== 0 ? (
                      <>
                        {(c.vote_average * 10).toFixed()} <sup>%</sup>
                      </>
                    ) : (
                      "N/A"
                    )}
                  </div>

                </>
              )}


            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
