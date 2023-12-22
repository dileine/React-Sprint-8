import React from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { useState } from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { Container, Item } from "./starshipsList-styled";
import Pagination from "../pagination/pagination";
import { getItemId } from "../../utils/getItemId";
import NavLink from "../../utils/navlink"


const StarshipsList = () => {
    const [page, setPage] = useState(1);
   
    const url =ENDPOINTS.starships;
    const { data, next, loading, error} = useFetchAPI (url, page);
   

    return(<Container>
      {loading && <div style={{ textAlign: "center" }}>loading data...</div>}
      {error && <div style={{ textAlign: "center" }}>Error: {error}</div>}
      {data && (
        <>
         <ul>
         {data.map((starship, index)=>(
          <Item key={index}>
          <NavLink to={`/starships/${getItemId(starship.url)}`}>
          <li>{starship.name}</li>
          <li>{starship.model}</li>
          </NavLink>
          </Item>
          ))}
         </ul>
          <Pagination page={page} setPage={setPage} next={next}/>
         </>
         )}
    </Container>
    )


}

export default StarshipsList
