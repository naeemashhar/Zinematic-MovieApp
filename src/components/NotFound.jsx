import { useNavigate, useLocation } from "react-router-dom";
import l from "/404.gif";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const reason = location.state?.reason;

  const message =
    reason === "trailer"
      ? "Oops! We couldn’t find the trailer for this movie."
      : "The page you’re looking for doesn’t exist.";

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-black text-gray-200 px-6 py-8">
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mb-10 md:mb-0">
        <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl text-[#AAAAAA] leading-tight">
          Not Found<span className="text-[#6c5ce7]">.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400">{message}</p>
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="mt-4 px-6 py-2 cursor-pointer bg-[#6c5ce7] hover:bg-[#5a4ac0] text-white rounded-2xl transition-all shadow-md"
        >
          Go Back
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-[80%] sm:w-[60%] md:w-[400px] max-h-[400px] object-contain"
          src={l}
          alt="Not found illustration"
        />
      </div>
    </div>
  );
};

export default NotFound;
