import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"






const App = () => {
  return (
    <div className="w-screen h-screen flex bg-[#0B0B0E]">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
