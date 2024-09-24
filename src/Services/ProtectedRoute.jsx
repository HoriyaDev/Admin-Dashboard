import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('logged') === 'true'; 
  console.log("🚀 ~ ProtectedRoute ~ isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    
    return <Navigate to="/" />;
  }

  return children;
};
export default ProtectedRoute

