// Importa useContext y el contexto necesario
import React, { useContext } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {  
  const { getCartContents } = useContext(CartContext);
  const cartContents = getCartContents();

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = cartContents.reduce((acc, item) => acc + item.quantity, 0);

  // Determinar si el carrito está vacío
  const isCartEmpty = cartContents.length === 0;

  return (
    <>
      <div className="nav-cart">
        {/* Deshabilita el enlace si el carrito está vacío */}
        <Link to={isCartEmpty ? "/" : "/cart"} disabled={isCartEmpty}>
          <HiOutlineShoppingCart />
          <small>{totalQuantity}</small>
        </Link>
      </div>
    </>
  );
}

export default CartWidget;
