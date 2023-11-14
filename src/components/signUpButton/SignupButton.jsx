import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
const { loginWithRedirect } = useAuth0();

const handleSignup = () => {
    loginWithRedirect({screen_hint: "signup"});
}

return <button onClick={handleSignup}>
    Sign up
</button>

}

export default SignupButton