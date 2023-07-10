import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarshipDetails from "../../components/starshipDetails/starshipDetails";
import { Container } from "../common/pages.styled";
import { publish } from "../../utils/customEvents";


const Starship = () => {
    const { starshipId } = useParams();
    useEffect(() => publish("none"), []);

    return (<Container>
        <StarshipDetails starshipId = {starshipId}/>
        </Container>
    )
}

export default Starship;