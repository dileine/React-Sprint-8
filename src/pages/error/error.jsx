import React, { useEffect } from "react";
import { publish } from "../../utils/customEvents";

const Error = () => {
    useEffect(() => publish("none"), []);
    return(<>
        <h1>Error 404:</h1>
        <h3>This is not the page you're looking for. MOVE ALONG</h3>
        </>
    )
}
export default Error;

