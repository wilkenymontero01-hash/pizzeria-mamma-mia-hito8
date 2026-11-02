# 🍕 Pizzería Mamma Mía! - Hito 8

Este proyecto corresponde al Hito 8 del desarrollo web con React, enfocado en la implementación de autenticación real con el backend utilizando JWT (JSON Web Tokens), la conexión de los formularios de Login y Register, el acceso al perfil de usuario autenticado y el envío seguro del carrito de compras al checkout[cite: 2].

---

## 🚀 Tecnologías utilizadas

- **React** (Biblioteca de JavaScript)
- **Vite** (Entorno de desarrollo rápido)
- **React Router DOM** (Navegación y protección de rutas)
- **Context API** (`CartContext` y `UserContext` para estado global)
- **JWT (JSON Web Tokens)** para autenticación segura en el backend[cite: 2]
- **Integración con API REST** (Consumo de endpoints para auth, perfil y checkouts)[cite: 2]
- **Bootstrap** (Diseño responsivo y componentes estilizados)

---

## 📋 Requerimientos implementados (Hito 8)

### 1. Autenticación con Backend (`UserContext`):[cite: 2]
- Implementación de métodos para `login` y `register`, consumiendo las rutas `/api/auth/login` y `/api/auth/register` con almacenamiento de token JWT y email en el estado[cite: 2].
- Implementación del método `logout` para eliminar el token y el email del estado[cite: 2].
- Implementación del método para obtener el perfil del usuario autenticado consumiendo la ruta `/api/auth/me`[cite: 2].

### 2. Integración de Vistas de Usuario:[cite: 2]
- Conexión de `Login.jsx` y `Register.jsx` con los métodos de autenticación del `UserContext`[cite: 2].
- Vista `Profile.jsx` que muestra el email del usuario autenticado y un botón de cierre de sesión[cite: 2].
- Botón de Logout en `Navbar.jsx` para cerrar sesión globalmente[cite: 2].

### 3. Proceso de Checkout y Confirmación:[cite: 2]
- Vista `Cart.jsx` que implementa el método para enviar el carrito de compras a `/api/checkouts` enviando el token JWT en el header `Authorization`[cite: 2].
- Muestra de un mensaje de éxito en `Cart.jsx` tras realizar la compra exitosamente[cite: 2].

---
