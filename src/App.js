

import './App.css';
import LoginPage from './Pages/login/LoginPage';
import DashBoard from './Pages/dashboard/DashBoard';
import Profile from './Pages/profile/Profile';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Pages/login/Register';
import ProtectedRoute from './Services/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />

          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            } 
          />

          
          <Route 
           path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
