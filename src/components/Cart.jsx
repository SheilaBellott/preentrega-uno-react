import React, { useState, useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Formulario from './Formulario';

const Cart = () => {
  const { getCartContents, setCart } = useShoppingCart();
  const cartContents = getCartContents();
  const [individualSums, setIndividualSums] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    calculateTotals();
  }, [cartContents]);

  const calculateTotals = () => {
    const sums = {};
    let total = 0;

    cartContents.forEach((item) => {
      const subtotal = item.quantity * item.precio;
      sums[item.productId] = subtotal;
      total += subtotal;
    });

    setIndividualSums(sums);
    setTotalAmount(total);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartContents.filter((item) => item.productId !== productId);
    setCart(updatedCart);
  };

  const handleFinalizarCompra = () => {
    setMostrarFormulario(true); 
  };

  return (
    <div className='cart'>
      <h2>Carrito</h2>
      {cartContents.length > 0 && (
        <div>
          {cartContents.map((item) => (
            <div key={item.productId} className="cart-item">
              <p>ID: {item.productId}</p>
              <p>Producto: {item.nombre}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.precio}</p>
              <p>Subtotal: ${individualSums[item.productId]}</p>
              <button onClick={() => removeFromCart(item.productId)} className='button-cart' >Eliminar</button>
            </div>
          ))}
        </div>
      )}

      {cartContents.length > 0 && <p>Monto total:${totalAmount}</p>}

      {cartContents.length > 0 && (
        <button onClick={handleFinalizarCompra} className='button-cart'>Finalizar Compra</button>
      )}

      {mostrarFormulario && <Formulario productosSeleccionados={cartContents} />}
    </div>
  );
};

export default Cart;







