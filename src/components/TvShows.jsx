import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Loader from "./Loader";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const TvShows = () => {
  const navigate = useNavigate();

  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1); //for infinite scroll
  const [hasMore, sethasMore] = useState(true);

  document.title = "Zinematic | Tv Shows | " + category.toUpperCase();

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settv((prevstate) => [...prevstate, ...data.results]);

        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (err) {
      console.log("Error fetching search results:", err);
    }
  };

  const refreshhandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refreshhandler();
  }, [category]);
  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[4%] py-1 w-full flex items-center justify-between fixed top-0 left-0 z-40 backdrop-blur-md bg-[#0B0B0E]/80">
        <h1 className=" text-xl font-semibold text-[#AAAAAA]">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6c5ce7] mr-3 text-xl ri-arrow-left-line"
          ></i>
          Tv Shows
        </h1>
        <div className="w-[80%] flex items-center">
          <TopNav />

          <Dropdown
            title="Category"
            options={["on_the_air", "top_rated", "popular", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <div className="pt-[10vh] bg-[#0B0B0E]">
        <InfiniteScroll
          className="bg-[#0B0B0E]"
          dataLength={tv.length}
          next={GetTv}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={tv} title="tv" />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default TvShows;
