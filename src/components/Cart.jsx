import React, { useState, useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Cart = () => {
  const { getCartContents, setCart } = useShoppingCart();
  const cartContents = getCartContents();
  const [individualSums, setIndividualSums] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotals();
  }, [cartContents]);

  const calculateTotals = () => {
    const sums = {};
    cartContents.forEach((item) => {
      sums[item.productId] = item.quantity * item.precio;
    });

    const total = Object.values(sums).reduce((accumulator, sum) => accumulator + sum, 0);

    setIndividualSums(sums);
    setTotalAmount(total);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartContents.filter((item) => item.productId !== productId);
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


      {cartContents.length > 0 && <p>Monto total: {totalAmount}</p>}


      {cartContents.length > 0 && (
        <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
      )}
    </div>
  );
};

export default Cart;
