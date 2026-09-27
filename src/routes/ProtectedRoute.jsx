import { Outlet, Navigate } from "react-router-dom";


const ProtectedRoute  = ()=>{
    
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === "true" ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedRoute;