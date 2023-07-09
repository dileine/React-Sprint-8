import { Route, Routes } from "react-router-dom";
import Error from "../pages/error/error";
import Starships from "../pages/starships/starships";
import Starship from "../pages/starship/starship";

const Router = () => {
    return( <Routes>
        <Route path={process.env.PUBLIC_URL}>    
            <Route path="" element={<Starships/>}/>
            <Route path="starships/:starshipId" element={<Starship/>}/>
            <Route path="*" element={<Error/>}/>
        </Route>
    </Routes>)
}

export default Router;