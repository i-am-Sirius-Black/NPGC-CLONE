
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import MainPage from "./pages/MainPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
      {/* <Route path="/admin" element={<Admin />} /> */}
    </Routes>
  </Router>
  );
};

export default App;
