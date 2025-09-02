import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import noimg from "/noim.png";

const HorizontalCards = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = window.innerWidth < 768 ? 200 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute z-10 left-1 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute z-10 right-1 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="w-full p-3 flex overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth"
      >
       {data && data.length > 0 ? (
  data
    .filter((d) => d.media_type === "movie" || d.media_type === "tv") // only movies + tv
    .map((d, i) => (
      <Link
        to={`/${d.media_type}/details/${d.id}`}
        key={i}
        className="min-w-[65%] sm:min-w-[40%] md:min-w-[25%] lg:min-w-[16%] h-[40vh] rounded overflow-hidden mr-5 mb-3 bg-zinc-900 hover:bg-[#6C5CE7] duration-300 hover:scale-95"
      >
        <img
          className="w-full h-[55%] object-cover object-top shadow-lg"
          src={
            d.backdrop_path || d.poster_path
              ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`
              : noimg
          }
          alt={d.name || d.title || "no image"}
        />

        <div className="text-white p-3 h-[45%] overflow-auto">
          <h1 className="text-lg font-black">
            {d.name || d.title || d.original_name || d.original_title}
          </h1>
          <p className="text-sm mt-1">
            {d.overview ? `${d.overview.slice(0, 50)}...` : "No overview available."}
            {d.overview && <span className="text-zinc-500"> more </span>}
          </p>
        </div>
      </Link>
    ))
) : (
  <h1 className="text-3xl text-white font-black text-center mt-5 w-full">
    No Data Found
  </h1>
)}

      </div>
    </div>
  );
};

export default HorizontalCards;
