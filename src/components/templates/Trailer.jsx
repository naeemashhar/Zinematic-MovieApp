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
    <div className="absolute top-0 left-0 z-[100] w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,.9)]">
      
      {ytvideo ?<>
        <Link
        onClick={() => navigate(-1)}
        className="absolute left-[5%] top-[5%] text-3xl text-white hover:text-[#6c5ce7]  ri-close-fill"
      ></Link>

      {/*for play trailer*/}
       <ReactPlayer
       controls
        height={600}
        width={1200}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      /> 
      </>: <NotFound /> }
      
    </div>
  );
};

export default Trailer;
