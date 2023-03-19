import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../_Services/token";
import { getFirstName } from "../_Services/firstName";
import { Navigate } from "react-router-dom";


function SignOut() {
    // For easy write/read script
    const ls = localStorage;
    const dispatch = useDispatch();
    // const token = useSelector((state) => state.token.value);

    useEffect(() => {
        dispatch(getToken(null));
        dispatch(getFirstName(""));

        if(ls.getItem("rememberMe")) {
            ls.clear();
        } else {
            ls.removeItem("token");
        }
    });

    // Redirection
    return <Navigate to="/" />
}

export default SignOut;