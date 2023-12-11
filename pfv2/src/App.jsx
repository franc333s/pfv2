import { Route, Routes } from "react-router-dom";

import "./scss/global.scss";

import Home from "./views/Home";
import DevProjectsPage from "./views/DevProjectsPage";
import UxuiProjects from "./views/UxuiProjectsPage";
import DevOneProject from "./views/DevOneProject";
import Info from "./views/Info";
import UxuiOneProject from "./views/UxuiOneProject";




function App() {
  
  return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects/dev' element={<DevProjectsPage />} />
                <Route path='/projects/uxui' element={<UxuiProjects />} />
                <Route path='/projects/dev/:slug' element={<DevOneProject />} />
                <Route path='/projects/uxui/:slug' element={<UxuiOneProject />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </>
  )
}

export default App
