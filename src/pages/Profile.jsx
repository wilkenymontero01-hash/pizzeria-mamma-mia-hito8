import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="container text-center my-5">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email || "Cargando..."}</p>
      <button onClick={logout} className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;