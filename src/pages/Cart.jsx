import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (response.ok) {
        setSuccessMessage(true);
      } else {
        alert("Ocurrió un error con el pago.");
      }
    } catch (error) {
      console.error("Error enviando el checkout:", error);
    }
  };

  return (
    <div className="container my-5">
      <h2>Carrito de Compras</h2>
      
      {/* Lista de productos... */}

      <h3>Total: ${total}</h3>

      <button
        disabled={!token}
        onClick={handleCheckout}
        className="btn btn-success mt-3"
      >
        Pagar
      </button>

      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          ¡Compra realizada con éxito! Muchas gracias.
        </div>
      )}
    </div>
  );
};

export default Cart;