import { Route, Routes } from "react-router-dom";

import "./scss/global.scss";

import Home from "./views/Home";
import ProjectsPage from "./views/ProjectsPage";
import ProjectType from "./views/ProjectType";
import OneProject from "./views/OneProject";
import Info from "./views/Info";



function App() {
  
  return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectType />} />
                <Route path='/projects/dev' element={<ProjectsPage />} />
                <Route path='/projects/dev/:slug' element={<OneProject />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </>
  )
}

export default App
