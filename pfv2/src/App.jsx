import { Route, Routes } from "react-router-dom";

import "./scss/global.scss";

import Home from "./views/Home";
import ProjectsPage from "./views/ProjectsPage";
import OneProject from "./views/OneProject";
import Info from "./views/Info";




export function App() {
  
  return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/projects/:slug' element={<OneProject />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </>
  )
}

