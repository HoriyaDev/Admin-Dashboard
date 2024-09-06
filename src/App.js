import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/login/LoginPage';
import DashBoard from './Pages/dashboard/DashBoard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


 



function App() {
  return (
   <>

  
 

<BrowserRouter>
   <Routes>
     <Route path="/" element={<LoginPage />} />
     <Route path="/dashboard" element={<DashBoard />} />
     
   </Routes>
 </BrowserRouter>






  
  
   
   </>
  );
}

export default App;
