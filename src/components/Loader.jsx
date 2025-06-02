import l from "/loader.gif"
const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <h1 className="text-[#AAAAAA] font-bold shadow-lg text-9xl  w-[55%]">Welcome To Zinematic<span className="text-[#6c5ce7]">.</span></h1>
      <img className="h-[60%] object-cover" src={l} alt="" />
    </div>
  )
}

export default Loader
