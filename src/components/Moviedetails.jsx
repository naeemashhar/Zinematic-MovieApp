import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./templates/HorizontalCards";

const Moviedetails = () => {
  document.title = "Zinematic | Movies | Details";

  const { pathname } = useLocation(); //for playing trailer

  const { id } = useParams();

  const { info } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      //clean up
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-fit px-[5%] md:px-[10%] bg-[#0B0B0E] pb-10"
    >
      {/* NAVIGATION */}
      <nav className="w-full h-[10vh] text-zinc-300 text-xl gap-6 flex items-center justify-start">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6c5ce7] ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.details.homepage} title="movie-site">
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
          className="px-3 py-1 rounded text-yellow-400 border border-yellow-400 text-lg hover:bg-amber-400 hover:text-black hover:scale-95 transition duration-300 font-bold"
          target="_blank"
          title="IMDb"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      {/* POSTER + DETAILS */}
      <div className="w-full flex flex-col md:flex-row gap-6 mt-6">
        <img
          className="h-[55vh] object-cover shadow-lg hover:scale-95 transition-all duration-300"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />

        <div className="text-white">
          {/* TITLE & YEAR */}
          <h1 className="text-3xl md:text-5xl font-black flex flex-wrap items-center gap-2">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            <span className="text-xl font-bold text-[#AAAAAA]">
              ({info.details.release_date?.split("-")[0]})
            </span>
          </h1>

          {/* RATING & DETAILS */}
          <div className="text-zinc-200 text-sm flex flex-wrap items-center gap-2 mt-3 mb-4">
            <span className="rounded-full text-lg w-[5.5vh] h-[5.5vh] flex justify-center items-center shadow-lg bg-yellow-500 text-white font-semibold">
              {info.details.vote_average !== 0 ? (
                <>
                  {(info.details.vote_average * 10).toFixed()}
                  <sup>%</sup>
                </>
              ) : (
                "N/A"
              )}
            </span>

            <span className="text-lg font-semibold ml-2">User Score</span>
            {info.details.release_date && (
              <span>| {info.details.release_date}</span>
            )}
            {info.details.genres && info.details.genres.length > 0 && (
              <span>| {info.details.genres.map((g) => g.name).join(", ")}</span>
            )}
            {info.details.runtime && <span>| {info.details.runtime}min</span>}
          </div>

          {/* TAGLINE */}
          <h2 className="italic text-[#AAAAAA]">{info.details.tagline}</h2>

          {/* OVERVIEW */}
          <h2 className="text-xl mt-4 mb-2 font-semibold">Overview</h2>
          <p className="leading-6 mb-4">{info.details.overview}</p>

          {/* LANGUAGES */}
          <h3 className="italic text-[#AAAAAA]">
            Available in Different Languages:
          </h3>
          <p className="mb-6">{info.translations?.join(" | ")}</p>

          {/* TRAILER BUTTON */}
          <Link
            to={`${pathname}/trailer`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#6C5CE7] text-white text-sm font-semibold hover:bg-[#5b4bd6] transition"
          >
            <i className="ri-play-fill"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* WATCH PROVIDERS */}
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 mt-10 text-white">
        {info.watchproviders?.flatrate && (
          <div className="flex items-center gap-4 flex-wrap">
            <h1>Available Platform:</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-md hover:scale-95 transition-all duration-300"
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders?.rent && (
          <div className="flex items-center gap-4 flex-wrap">
            <h1>Available on Rent:</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-md hover:scale-95 transition-all duration-300"
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders?.buy && (
          <div className="flex items-center gap-4 flex-wrap">
            <h1>Available to Buy:</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-md hover:scale-95 transition-all duration-300"
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mt-10">
        <h1 className="text-2xl mb-3 text-zinc-200 font-semibold">
          <hr className="my-3 border-zinc-500" />
          Recommendations & Similar Stuff
        </h1>
        <HorizontalCards
          data={
            info.recommendation.length > 0 ? info.recommendation : info.similar
          }
        />
      </div>

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default Moviedetails;
