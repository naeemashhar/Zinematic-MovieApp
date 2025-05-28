import { Link } from "react-router-dom";


const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path || data.poster_path
        })`,
        backgroundPosition: "top 3%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[2%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      <p className="w-[70%] mt-3 mb-2 text-white">
        {data.overview.slice(0, 200)} ...
        <Link className="text-blue-400"> more </Link>
      </p>

      <p className="text-[#AAAAAA] flex gap-x-2">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || data.original_language.toUpperCase()}
        <i className="text-yellow-500 ri-album-fill"></i>{data.media_type.toUpperCase()}
      </p>

      <Link className="p-3 mt-3 text-sm font-semibold rounded text-white bg-[#6C5CE7] hover:scale-95 duration-900">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
