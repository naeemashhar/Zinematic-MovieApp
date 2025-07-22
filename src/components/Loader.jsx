import l from "/loader.gif";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center bg-black px-4">
      <h1 className="text-[#AAAAAA] font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-center md:text-left mb-4 md:mb-0 md:w-[55%]">
        Welcome To <span className="text-[#6c5ce7]">Zinematic</span><span className="text-[#6c5ce7]">.</span>
      </h1>
      <img
        className="h-32 sm:h-40 md:h-[60%] object-contain"
        src={l}
        alt="Loading"
      />
    </div>
  );
};

export default Loader;
