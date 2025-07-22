import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component"; //for infinite scroll

const Trending = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1); //for infinite scroll
  const [hasMore, sethasMore] = useState(true);

  document.title = "Zinematic | Trending | " + category.toUpperCase();

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prevstate) => [...prevstate, ...data.results]);

        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log("Error fetching search results:", err);
    }
  };

  const refreshhandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[4%] py-1  w-full flex items-center justify-between fixed top-0 left-0 z-40 backdrop-blur-md bg-[#0B0B0E]/80">
        <h1 className="mt-5 md:mt-0 text-xl font-semibold text-[#AAAAAA]">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6c5ce7] mr-3 text-xl ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-[80%] flex items-center">
          <TopNav />

          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <div className="pt-[10vh] bg-[#0B0B0E]">
        <InfiniteScroll
          className="bg-[#0B0B0E]"
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
