import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"






const App = () => {
  return (
    <div //style={{
        //background: "radial-gradient(circle at center, rgba(50, 20, 80, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 70%)"}} 
        className=" w-screen h-screen flex bg-[#0B0B0E]">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
