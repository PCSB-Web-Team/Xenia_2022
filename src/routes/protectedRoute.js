import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

function ProtectedRoute({ children }) {
    const { loggedIn } = useSelector(({ user }) => user);

    return loggedIn ? children : <Navigate to="/auth" />;
}

export default ProtectedRoute;
