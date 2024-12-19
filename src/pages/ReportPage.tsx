import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";

const ReportPage: React.FC = () => {

    const { isAuth } = useAuth();
    const redirectLoginPage = useNavigate();

return  isAuth.loggedIn ? (
        <div>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default ReportPage;