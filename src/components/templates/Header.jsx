import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const bgUrl = `https://image.tmdb.org/t/p/original/${
    data.backdrop_path || data.profile_path || data.poster_path
  }`;
  return (
    <div
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(${bgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
  className="w-full h-[50vh] flex flex-col justify-end items-start px-4 md:px-[2%] pb-6 mt-20 md:mt-0"
>
      {/* Title */}
      <h1 className="w-full md:w-[70%] text-2xl md:text-5xl font-black text-white leading-snug md:leading-tight">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      {/* Overview */}
      <p className="w-full md:w-[70%] mt-3 mb-2 text-sm md:text-base text-white">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400 ml-1 underline underline-offset-2"
        >
          more
        </Link>
      </p>

      {/* Metadata */}
      <p className="text-[#AAAAAA] text-sm md:text-base flex flex-wrap gap-x-3 items-center">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || data.original_language.toUpperCase()}
        <i className="text-yellow-500 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
        <i className="text-yellow-500 ri-star-half-fill"></i>
        {data.vote_average.toFixed(1)}
      </p>

      {/* CTA Button */}
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="mt-4 px-4 py-2 text-sm font-semibold rounded text-white bg-[#6C5CE7] hover:scale-95 transition duration-300"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
