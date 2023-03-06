import { useDispatch } from "react-redux";
import { useEffect, useSelector } from "react";
import { getToken } from "../_Services/token";
import { getFirstName } from "../_Services/firstName";
import { Navigate } from "react-router-dom";


function SignOut() {
    const dispatch = useDispatch();
    // const token = useSelector((state) => state.token.value);

    useEffect(() => {
        dispatch(getToken(null));
        dispatch(getFirstName(""));

        localStorage.removeItem("token");
    });


    // Redirection
    return <Navigate to="/" />
}

export default SignOut;