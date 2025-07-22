import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute top-0 left-0 z-[100] w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.9)] px-4">
      {ytvideo ? (
        <>
          <Link
            onClick={() => navigate(-1)}
            className="absolute left-4 top-4 text-3xl text-white hover:text-[#6c5ce7] ri-close-fill z-50"
          ></Link>

          {/* Responsive video player container */}
          <div className="w-full max-w-[1200px] aspect-video">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
              controls
              width="100%"
              height="100%"
            />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
