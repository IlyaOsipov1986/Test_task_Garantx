import { Routes, Route } from "react-router-dom";
import ReportPage from "./pages/ReportPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App: React.FC = () => {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ReportPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/reset-password" element={<ResetPasswordPage/>}/>
      </Routes>
    </div>
  )
}

export default App
