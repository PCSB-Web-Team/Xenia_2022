import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

function ProtectedRoute(props, { children }) {
    const { loggedIn } = useSelector(({ user }) => user);
    !loggedIn && props.toast.toast.warn("Please login to visit the page! Or try refreshing your browser.")

    return loggedIn ? <>{props.toast.container}{children}</> : <Navigate to="/auth" />;
}

export default ProtectedRoute;
