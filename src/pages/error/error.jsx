import React, { useEffect } from "react";
import { publish } from "../../utils/customEvents";

const Error = () => {
    useEffect(() => publish("none"), []);
    return(
        <p>Error 404: page Not found</p>
    )
}
export default Error;