

import './App.css';
import LoginPage from './Pages/login/LoginPage';
import DashBoard from './Pages/dashboard/DashBoard';
import Profile from './Pages/profile/Profile';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Pages/login/Register';
import ProtectedRoute from './Services/ProtectedRoute';
import TournamentModel from './components/model/TournamentModel';
import { useState } from 'react';


function App() {

  const [selectedPlayer , setSelectedPlayer] =  useState(null)



  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />

          
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
