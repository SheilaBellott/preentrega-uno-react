import React, { useState, useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Cart = () => {
  const { getCartContents, setCart } = useShoppingCart();
  const cartContents = getCartContents();
  const [individualSums, setIndividualSums] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calcular las sumas individuales y el monto total cada vez que cambia el contenido del carrito
    calculateTotals();
  }, [cartContents]);

  const calculateTotals = () => {
    // Calcular la suma individual para cada producto en el carrito
    const sums = {};
    cartContents.forEach((item) => {
      sums[item.productId] = item.quantity * item.precio;
    });

    // Calcular el monto total sumando todas las sumas individuales
    const total = Object.values(sums).reduce((accumulator, sum) => accumulator + sum, 0);

    setIndividualSums(sums);
    setTotalAmount(total);
  };

  const removeFromCart = (productId) => {
    // Filtrar el carrito para excluir el producto con el productId
    const updatedCart = cartContents.filter((item) => item.productId !== productId);
    // Actualizar el carrito con la nueva lista
    setCart(updatedCart);
  };

  const handleFinalizarCompra = () => {
    // Lógica para finalizar la compra (puedes implementar tu propia lógica aquí)
    console.log("Compra finalizada");
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cartContents.length > 0 && (
        <ul>
          {cartContents.map((item) => (
            <li key={item.productId}>
              <p>ID: {item.productId}</p>
              <p>Producto: {item.nombre}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: {item.precio}</p>
              <p>Subtotal: {individualSums[item.productId]}</p>
              <button onClick={() => removeFromCart(item.productId)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      {/* Mostrar el monto total solo si hay productos en el carrito */}
      {cartContents.length > 0 && <p>Monto total: {totalAmount}</p>}

      {/* Botón de Finalizar Compra */}
      {cartContents.length > 0 && (
        <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
      )}
    </div>
  );
};

export default Cart;
