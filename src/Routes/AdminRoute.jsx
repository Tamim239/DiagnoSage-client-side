import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Hook/useAuth"
import { useAdmin } from "../Hook/useAdmin"


export const AdminRoute = ({children}) => {
const {user, loading} = useAuth()
const [isAdmin, isAdminLoading] = useAdmin()
const location = useLocation()
if(user && isAdmin){
    return children
}
if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>
}

  return <Navigate to="/login" state={{form: location}} replace></Navigate>
}
