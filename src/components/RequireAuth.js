import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Dashboard from "../pages/Dashboard"


const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { role } = useAuth()

    console.log("ALLOW", allowedRoles);
    console.log("role", role);

    const content = (
        Array.isArray(allowedRoles) && allowedRoles.includes(role)
            ? <Dashboard />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
    // const content = 

    return content
}
export default RequireAuth