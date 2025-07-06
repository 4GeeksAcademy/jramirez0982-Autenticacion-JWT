import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // Hook para detectar cambios de ruta

  useEffect(() => {
    const token = localStorage.getItem("token-jwt");
    setIsLogged(!!token);  // Si hay token, isLogged será true
  }, [location]);  // Se ejecuta cada vez que cambia la ruta

  const handleLogout = () => {
    localStorage.removeItem("token-jwt");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <nav className="container navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">Proyecto de Autenticación JWT</Link>

      <div className="ml-auto">
        {isLogged ? (
          <>
            <Link to="/show_private_info" 
			className="btn btn-primary me-2">Mi información privada
			</Link>
            <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/" className="btn btn-success">Bienvenido</Link>
        )}
      </div>
    </nav>
  );
};

