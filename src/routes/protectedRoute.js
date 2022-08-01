import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { userSelector } from "../store/userSlice";

function ProtectedRoute({ children }) {
    const {loggedIn} = useSelector(userSelector);
    console.log('s')

    return loggedIn ? children : <Navigate to="/auth" />;
}

export default ProtectedRoute;
