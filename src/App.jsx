import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";
import About from "./components/About";
import Contact from "./components/Contact";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Peopledetails from "./components/Peopledetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div //style={{
      //background: "radial-gradient(circle at center, rgba(50, 20, 80, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 70%)"}}
      className="sel w-screen h-screen flex bg-[#0B0B0E]"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />

        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tvShow" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >
          <Route path="/tv/details/:id/trailer" element={<Trailer />}/>
        </Route>

        <Route path="/persons" element={<People />} />
        <Route path="/person/details/:id" element={<Peopledetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
