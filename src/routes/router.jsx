import { Route, Routes } from "react-router-dom";
import Error from "../pages/error/error";
import Starships from "../pages/starships/starships";
import Starship from "../pages/starship/starship";
import Home from "../pages/home/home";
import Authentication from "../pages/authentication/Authentication";


const Router = () => {
    return( <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home />} />
        <Route path="/authentication" element={<Authentication />}/>
        
        <Route path="/starships" element={<Starships />} />
        <Route  path="/starships/:starshipId" element={<Starship />} />
        <Route path="*" element={<Error />} />
    </Routes>)
}

export default Router;