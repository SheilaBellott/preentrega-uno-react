
import React, { useContext } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {  
  const { getCartContents } = useContext(CartContext);
  const cartContents = getCartContents();

  
  const totalQuantity = cartContents.reduce((acc, item) => acc + item.quantity, 0);

 
  const isCartEmpty = cartContents.length === 0;

  return (
    <>
      <div className="nav-cart">
        
        <Link to={isCartEmpty ? "/" : "/cart"} disabled={isCartEmpty}>
          <HiOutlineShoppingCart className='icon-cart'/>
          <small className='total-quantity' >{totalQuantity}</small>
        </Link>
      </div>
    </>
  );
}

export default CartWidget;
