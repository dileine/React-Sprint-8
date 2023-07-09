import { ENDPOINTS } from "../../constants/endpoints";
import { useFetchAPIItem } from "../../hooks/useFetchAPIItem";
import { Container } from "./starshipDetails-styled";
import NavLink from "../../utils/navlink";

const StarshipDetails = ({ starshipId }) => {
    const itemUrl = ENDPOINTS.starships + starshipId + "/";
    const imgUrl = ENDPOINTS.starshipImg + starshipId + ".jpg";

    const { dataItem, loadingItem, errorItem, imgItem, loadingImg, errorImg } = 
    useFetchAPIItem(itemUrl, imgUrl);

    return(<div>
        {loadingItem && loadingImg && <div >loading starships...</div>}
        {errorItem && <div>Error loading data</div>}
        {dataItem && imgItem && !loadingItem && !errorItem && (
        <Container>

            <div className="container-img-starship">
						<img className="img-starship" src={imgItem} alt="starship img" />
						{errorImg && <p className="message">Image not found</p>}
					</div>
					<ul className="list-details-starship">
						<h2 className="name-starship">{dataItem.name}</h2>
						<div className="block-list-details-starship">
							<li>
								<span>Model:</span> <span>{dataItem.model}</span>
							</li>
							<li>
								<span>Manufacturer:</span> <span>{dataItem.manufacturer}</span>
							</li>
							<li>
								<span>Class:</span> <span>{dataItem.starship_class}</span>
							</li>
							<li>
								<span>Cost:</span>
								<span>{dataItem.cost_in_credits} credits</span>
							</li>
							<li>
								<span>Speed:</span>
								<span>{dataItem.max_atmosphering_speed} km/h</span>
							</li>
							<li>
								<span>Hyperdrive Rating:</span>
								<span>{dataItem.hyperdrive_rating}</span>
							</li>
							<li>
								<span>MGLT:</span> <span>{dataItem.MGLT}</span>
							</li>
							<li>
								<span>Length:</span> <span>{dataItem.length}m</span>
							</li>
							<li>
								<span>Minimum Crew:</span> <span>{dataItem.crew}</span>
							</li>
							<li>
								<span>Passengers:</span> <span>{dataItem.passengers}</span>
							</li>
							<li>
								<span>Cargo Caliacity:</span>
								<span>{dataItem.cargo_capacity} metric tons</span>
							</li>
							<li>
								<span>Consumables:</span> <span>{dataItem.consumables}</span>
							</li>
						</div>
					</ul>
					
					<NavLink to="/Starships">
						<button>starships</button>
					</NavLink>
        
        </Container>
        )}
        </div>
    )
}


export default StarshipDetails;