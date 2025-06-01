import { Link, useNavigate } from "react-router-dom";
import l from "/404.gif";

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black text-gray-200 px-6 px-[10%]">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="font-bold text-6xl md:text-8xl text-[#AAAAAA] leading-tight">
          Not Found<span className="text-[#6c5ce7]">.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Oops! We couldn’t find the trailer for this movie.
        </p>
        <Link
          to={navigate(-1)}
          className="mt-4 px-6 py-2 bg-[#6c5ce7] hover:bg-[#5a4ac0] text-white rounded-2xl transition-all shadow-md"
        >
          Go Back
        </Link>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          className="h-[300px] md:h-[400px] object-contain"
          src={l}
          alt="Not found illustration"
        />
      </div>

    </div>
  );
};

export default NotFound;
