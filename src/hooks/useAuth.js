import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(state => state.persisted.auth.token)
    // console.log("auth", token);
    let isManager = false
    let isAdmin = false
    let status = "user"

    if (token) {
        const decoded = jwtDecode(token)
        // console.log('decoded', decoded);
        const { email, role } = decoded.UserInfo

        isManager = role.includes('manager')
        isAdmin = role.includes('admin')

        // console.log("ADMINSS", isAdmin);

        if (isManager) status = "manager"
        if (isAdmin) status = "admin"

        return { email, role, status, isManager, isAdmin }
    }

    return { email: '', role: [], isManager, isAdmin, status }
}
export default useAuth