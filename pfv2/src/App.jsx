import { Route, Routes } from "react-router-dom";

import "./scss/global.scss";

import Home from "./views/Home";
import Projects from "./views/Projects";
import OneProject from "./views/OneProject";
import Info from "./views/Info";


function App() {
  
  return (
        <>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/' element={<OneProject />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </>
  )
}

export default App
