import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loader from "./Loader";

const Home = () => {
  document.title = "Zinematic | Home";

  const [wallpaper, setwallpaper] = useState(null); //for bg-wallpaper

  const [horizontal, sethorizontal] = useState(null); //for horizontal-div(below)

  const [category, setcategory] = useState("all"); //for hori-div category selection

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (err) {
      console.log("Error fetching search results:", err);
    }
  };

  const GetHorizontalCard = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      sethorizontal(data.results);
    } catch (err) {
      console.log("Error fetching search results:", err);
    }
  };

  useEffect(() => {
    GetHorizontalCard();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && horizontal ? (
    <>
      <SideNav />

      <div className="w-[80%] h-full overflow-x-hidden overflow-auto">
        <TopNav />
        <Header data={wallpaper} />

        <div className="p-5 flex justify-between">
          <h1 className="oxanium-l text-[3vh] text-[#AAAAAA] ">
            <span className="hover:lowercase duration-300 hover:text-xl">T</span>
            <span className="hover:uppercase duration-300 hover:text-xl">r</span>e
            <span className="hover:uppercase duration-300 hover:text-xl">n</span>d
            <span className="hover:uppercase duration-300 hover:text-xl">i</span>n
            <span className="hover:uppercase duration-300 hover:text-xl ">g</span>
          </h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={horizontal} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
