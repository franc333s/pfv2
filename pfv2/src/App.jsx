import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProjectsPage from "./views/ProjectsPage";
import OneProject from "./views/OneProject";
import Lab from "./views/Lab";
import Info from "./views/Info";
import "./scss/global.scss";


export function App() {
  
  return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/projects/:slug' element={<OneProject />} />
                <Route path='/lab' element={<Lab />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </>
  )
}

