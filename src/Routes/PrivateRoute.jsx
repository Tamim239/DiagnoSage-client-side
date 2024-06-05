import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Hook/useAuth";


export const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
if(user){
    return children
}
if(loading){
    return <progress className="progress w-56"></progress>
}

  return <Navigate to="/login" state={{form: location}} replace></Navigate>
}