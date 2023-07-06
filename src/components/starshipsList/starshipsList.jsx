import React from "react";
import { useFetchAPI } from "../../hooks/useFetchAPI";
import { useState } from "react";
import { endPoints } from "../../constants/endpoints";
import { Container, ContainerButtons } from "./starshipsList-styled";


const StarshipsList = () => {
    const [page, setPage] = useState(1);
    console.log(page);
    const url = endPoints.starshipsAlt; 
    const { data, next, loading, error } = useFetchAPI (url, page);

    return (
        <Container>
        {loading && <div >loading data...</div>}
        {error && <div>Error: {error}</div>}
        {data && (
             <ContainerButtons>
             <ul>
               {data.map((starship, index) => (
                 <div key={index}>                
                   <li>{starship.name}</li>
                   <li>{starship.model}</li>
                 </div>
               ))}
             </ul>
            
               <button
                 onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                 disabled={page === 1}>
                 Previous
               </button>
               {/*<span>{page}</span>*/}
               <button
                 onClick={() => {
                   if (next) setPage((prev) => prev + 1);
                 }}
                 disabled={!next}>
                 Next
               </button>
            
           </ContainerButtons>
        )}  
       
       </Container>)

}

export default StarshipsList
