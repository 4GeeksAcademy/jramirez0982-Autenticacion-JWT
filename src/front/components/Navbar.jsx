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
            <Link to="/private_page" className="btn btn-primary me-2">Mi información privada</Link>
            <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/" className="btn btn-success">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};


// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	let x = localStorage.getItem("token-jwt")
// 	console.log(x)
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">Autenticacion JWT</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Iniciar sesion</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };