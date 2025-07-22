import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import noimg from "/noim.png";

import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./templates/HorizontalCards";

const Tvdetails = () => {
  document.title = "Zinematic | TvShow | Details";

  const { pathname } = useLocation(); //for playing trailer

  const { id } = useParams();

  const { info } = useSelector((state) => state.tv);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      //clean up
      dispatch(removetv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-fit px-[5%] sm:px-[10%] bg-[#0B0B0E]"
    >
      {/* p-1 navigation */}
      <nav className="w-full h-[10vh] text-zinc-300 text-xl gap-6 sm:gap-10 flex items-center justify-start">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6c5ce7] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.details.homepage} title="tv-site">
          <i className="ri-external-link-line hover:text-[#6c5ce7]"></i>
        </a>

        <a
          target="_blank"
          title="wiki"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill hover:text-[#6c5ce7]"></i>
        </a>

        <a href="/" title="Home">
          <i className="ri-home-2-fill hover:text-[#6c5ce7]"></i>
        </a>

        <a
          className="Poppins-Bold px-3 rounded text-yellow-400 border border-yellow-400 text-lg hover:bg-amber-400 hover:text-black hover:scale-95 duration-300"
          target="_blank"
          title="IMDb"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      {/* p-2 poster and details */}
      <div className="w-full flex flex-col sm:flex-row mt-6">
        <img
          className="h-[50vh] sm:h-[55vh] object-cover rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />

        <div className="content sm:ml-[5%] mt-6 sm:mt-0 text-white">
          <h1 className="text-3xl sm:text-5xl font-black">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            <span className="text-xl font-bold text-[#AAAAAA]">
              ({info.details.first_air_date.split("-")[0]})
            </span>
          </h1>

          <div className="text-zinc-200 text-sm flex flex-wrap sm:flex-nowrap items-center gap-2 mt-2 mb-4">
            <span className="poppins-medium rounded-full text-base sm:text-lg w-[5.5vh] h-[5.5vh] flex justify-center items-center shadow-lg bg-yellow-500  text-white">
              {info.details.vote_average !== 0 ? (
                <>
                  {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
                </>
              ) : (
                "N/A"
              )}
            </span>
            <h1 className="ml-2 leading-5 font-semibold text-lg sm:text-xl">
              User Score
            </h1>
            <h1>{info.details.first_air_date}</h1> |
            <h1>{info.details.genres.map((g) => g.name).join(", ")}</h1> |
            <h1>No. of Seasons: {info.details.number_of_seasons}</h1> |
            <h1>No. of Episodes: {info.details.number_of_episodes}</h1>
          </div>

          <h1 className="poppins-medium-italic text-lg text-[#AAAAAA]">
            {info.details.tagline}
          </h1>

          <h1 className="text-xl mt-2 mb-2 font-semibold">Overview</h1>
          <p className="leading-5 mb-3">{info.details.overview}</p>

          <h1 className="poppins-medium-italic text-lg text-[#AAAAAA]">
            Available in Different Languages :
          </h1>
          <p className="w-full sm:w-[80%] mb-6">
            {info.translations.join(" | ")}
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="p-3 text-sm font-semibold rounded text-white bg-[#6C5CE7]"
          >
            <i className="ri-play-fill mr-2"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* p-3 available platforms */}
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:items-center mt-10 text-white">
        {info.watchproviders?.flatrate && (
          <div className="flex items-center gap-4">
            <h1 className="ml-2 sm:ml-10">Available Platform:</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-lg hover:scale-95 transition-all duration-300"
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders?.rent && (
          <div className="flex items-center gap-4">
            <h1 className="ml-2 sm:ml-10">Available on Rent:</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-lg hover:scale-95 transition-all duration-300"
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders?.buy && (
          <div className="flex items-center gap-4">
            <h1 className="ml-2 sm:ml-10">Available to Buy:</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-lg hover:scale-95 transition-all duration-300"
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* p-4 Seasons */}
      <h1 className="text-2xl sm:text-3xl mt-10 mb-3 text-zinc-200 font-semibold">
        <hr className="mb-3 border-1 text-zinc-500" />
        Seasons.
      </h1>

      <div className="w-full mb-6 p-2 sm:p-3 flex overflow-x-auto gap-6">
        {info.details.seasons.length > 0 ? (
          info.details.seasons.map((s, i) => (
            <div key={i} className="w-[30vw] sm:w-[25vh] md:mr-5">
              <img
                className="h-[30vh] sm:h-[39vh] min-w-[35vw] sm:min-w-[13vw] object-cover rounded shadow-lg hover:scale-95 transition-all duration-300"
                src={
                  s.poster_path
                    ? `https://image.tmdb.org/t/p/original/${s.poster_path}`
                    : noimg
                }
                alt=""
              />
              <h1 className="poppins-semibold text-base sm:text-xl w-full text-[#AAAAAA] mt-2">
                {s.name || s.title || s.original_name || s.original_title}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl text-white font-black text-center mt-5">
            No Data Found
          </h1>
        )}
      </div>

      {/* p-5 Recommendations */}
      <h1 className="text-2xl mb-3 text-zinc-200 font-semibold">
        <hr className="mt-10 mb-3 border-1 text-zinc-500" />
        Recommendations & Similar Stuff.
      </h1>

      <HorizontalCards
        data={
          info.recommendation.length > 0 ? info.recommendation : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default Tvdetails;
