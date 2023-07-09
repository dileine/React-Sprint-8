import { useParams } from "react-router-dom";
import StarshipDetails from "../../components/starshipDetails/starshipDetails";
import { Container } from "../common/pages.styled";


const Starship = () => {
    const { starshipId } = useParams();
  

    return (<Container>
        <StarshipDetails starshipId = {starshipId}/>
        </Container>
    )
}

export default Starship;