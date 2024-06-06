import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location.pathname);
    
    console.log(location, 'in login location');
    //console.log(location.pathname);

    if (loading){
        return <> <div className="text-center m-20">
                <span className="loading loading-infinity loading-lg"></span>
                <span className="loading loading-infinity loading-lg"></span>
                <span className="loading loading-infinity loading-lg"></span>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        </> 
    }
    if (user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    )
}

export default PrivateRoute