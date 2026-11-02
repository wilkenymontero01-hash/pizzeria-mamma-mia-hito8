import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Cambiar a null/false para flujo inicial real si lo deseas
  const [email, setEmail] = useState(null);

  // Método Login (Requerimiento 1)
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        alert("Login exitoso");
      } else {
        alert(data.error || "Error en inicio de sesión");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  // Método Register (Requerimiento 1)
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        alert("Registro exitoso");
      } else {
        alert(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en register:", error);
    }
  };

  // Método Logout (Requerimiento 2)
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // Método Get Profile (Requerimiento 3)
  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setEmail(data.email);
      }
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};