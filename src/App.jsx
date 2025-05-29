import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import People from "./components/People"
import About from "./components/About"
import Contact from "./components/Contact"






const App = () => {
  return (
    <div //style={{
        //background: "radial-gradient(circle at center, rgba(50, 20, 80, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 70%)"}} 
        className=" w-screen h-screen flex bg-[#0B0B0E]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvShows" element={<TvShows />} />
        <Route path="/peoples" element={<People />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      
    </div>
  )
}

export default App
