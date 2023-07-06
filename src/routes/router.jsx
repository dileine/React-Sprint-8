import { Route, Routes } from "react-router-dom";
import Error from "../pages/error/error";
import Starships from "../pages/starships/starships";

const Router = () => {
    return(
    <Routes>
        <Route path={process.env.PUBLIC_URL}>    
            <Route path="" element={<Starships/>}/>
            <Route path="*" element={<Error/>}/>
        </Route>
    </Routes>)
}

export default Router;