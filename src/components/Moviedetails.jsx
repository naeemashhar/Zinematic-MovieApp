import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./templates/HorizontalCards";

const Moviedetails = () => {
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
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-fit px-[10%]"
    >
      {/*p-1 navigation */}
      <nav className="w-full h-[10vh] text-zinc-300 text-xl gap-10 flex items-center justify-start">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6c5ce7] hover:text-2xl scale-100 duration-300 ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.details.homepage} title="movie-site">
          <i className="ri-external-link-line hover:text-[#6c5ce7] hover:text-2xl scale-100 duration-300"></i>
        </a>

        <a
          target="_blank"
          title="wiki"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill hover:text-[#6c5ce7] hover:text-2xl scale-100 duration-300"></i>
        </a>

        <a href="/" title="Home">
          <i className="ri-home-2-fill hover:text-[#6c5ce7] hover:text-2xl scale-100 duration-300"></i>
        </a>

        <a
          className='poppins-semibold className=" px-3 rounded text-yellow-400 border-1 border-yellow-400 text-lg hover:bg-amber-400 hover:text-black hover:scale-95 duration-300'
          target="_blank"
          title="IMDb"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      {/*p-2 poster and details */}
      <div className="w-full flex">
        <img
          className="h-[55vh] mt-10 object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black ">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}

            <span className="text-xl font-bold text-[#AAAAAA]">
              ({info.details.release_date.split("-")[0]})
            </span>
          </h1>

          <div className="text-zinc-200 text-sm flex items-center gap-x-2 mt-1 mb-4">
            <span className="poppins-medium rounded-full text-lg w-[5.5vh] h-[5.5vh] flex justify-center items-center shadow-lg bg-yellow-500  text-white">
              {info.details.vote_average !== 0 ? (
                <>
                  {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
                </>
              ) : (
                "N/A"
              )}
            </span>
            <h1 className="w-[4.8vw] ml-2 leading-5 font-semibold text-xl">
              User Score
            </h1>
            <h1>{info.details.release_date}</h1> |
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>|
            <h1>{info.details.runtime}min</h1>
          </div>

          <h1 className="poppins-medium-italic text-lg text-[#AAAAAA]">
            {info.details.tagline}
          </h1>

          <h1 className="text-xl mt-2 mb-2 font-semibold">Overview</h1>
          <p className="leading-5 mb-3">{info.details.overview}</p>

          <h1 className="poppins-medium-italic text-lg text-[#AAAAAA]">
            Available in Different Languages :
          </h1>
          <p className="w-[80%] mb-6">{info.translations.join(" | ")}</p>

          <Link
            to={`${pathname}/trailer`}
            className="p-3 text-sm font-semibold rounded text-white bg-[#6C5CE7]"
          >
            <i className="ri-play-fill mr-2"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/*p-3 available platforms */}
      <div className="w-full flex items-center mt-10 ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-5  items-center text-white">
            <h1 className="ml-10">Available Platform :</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-5 items-center text-white">
            <h1 className="ml-10">Available on Rent : </h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-5 items-center text-white">
            <h1 className="ml-10">Available to buy :</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
                className="w-[5vh] h-[5vh] rounded-md object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:scale-95 transition-all duration-300"
              />
            ))}
          </div>
        )}
      </div>

      {/*p-4 Recommendation and similar stuff */}
      <h1 className="text-2xl mb-3  text-zinc-200 font-semibold">
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

export default Moviedetails;
