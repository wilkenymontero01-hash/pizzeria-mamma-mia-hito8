import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">Pizzería Mamma Mía</span>
      <div className="navbar-nav ms-auto">
        {token ? (
          <>
            <button onClick={logout} className="btn btn-outline-light me-2">
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Rutas públicas */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;