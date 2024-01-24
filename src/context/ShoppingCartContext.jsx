// ShoppingCartContext.js

import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.productId === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          productId: product.id,
          quantity,
          nombre: product.titulo, // Agregar el nombre del producto
          precio: product.precio, // Agregar el precio del producto
        },
      ]);
    }
  };

  const getCartContents = () => {
    return cart;
  };

  const contextValue = {
    cart,
    setCart,
    addToCart,
    getCartContents,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useShoppingCart = () => {
  return useContext(CartContext);
};
