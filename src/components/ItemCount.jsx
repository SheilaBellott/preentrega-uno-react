import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const ItemCount = ({ product, onAddToCart }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAgregarAlCarrito = () => {
    // Llamada a la función de devolución de llamada con la cantidad seleccionada
    onAddToCart(contador);
  };

  return (
    <div>
      <Button className='calculadora' borderRadius={"10px"} onClick={restar}>
        -
      </Button>
      <Button className='agregar' borderRadius={"5px"} onClick={handleAgregarAlCarrito}>
        Agregar al carrito {contador}
      </Button>
      <Button className='calculadora' borderRadius={"10px"} onClick={sumar}>
        +
      </Button>
    </div>
  );
};

export default ItemCount;

































