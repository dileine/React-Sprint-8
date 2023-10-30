import React, { useEffect } from "react";
import { Container } from "../common/pages.styled";
import Welcome from "../../components/welcome/welcome";
import { publish } from "../../utils/customEvents";

const Home = () => {
    useEffect(() => publish("homeClick"), []);
return(<Container>
   <Welcome/>
    </Container>)
}

export default Home;