import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {

    const[val, setVal]=useState("");

    console.log(val);



  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i class="text-xl text-[#AAAAAA] ri-search-2-line"></i>

      <input
      onChange={(e) => setVal(e.target.value)}
      value={val}
        type="text"
        placeholder="Search"
        className="w-[50%] mx-10 p-5 outline-none border-none bg-transparent text-[#AAAAAA]"
      />
      {val.length > 0 && <i onClick={() => setVal("")} class=" text-xl text-[#AAAAAA] ri-close-fill"></i>}

      

      <div className="absolute w-[50%] max-h-[50vh] top-[90%] rounded overflow-auto bg-zinc-200">
        
        {/* <Link className="flex justify-start items-center border-b-1 p-7 w-[100%] text-zinc-600 font-semibold border-white hover:bg-[#AAAAAA] hover:text-black transition-all duration-300 ease-in-out">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */ }

 
        

      </div>
    </div>
  );
};

export default TopNav;
