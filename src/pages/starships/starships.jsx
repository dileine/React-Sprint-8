import React, { useEffect } from "react";
import StarshipsList from "../../components/starshipsList/starshipsList";
import { Container } from "../../components/starshipsList/starshipsList-styled";
import { publish } from "../../utils/customEvents";


const Starships = () => {
    useEffect(() => publish("starshipsClick"), []);
    
return(<Container>
    <StarshipsList/>
    </Container>)
}

export default Starships;