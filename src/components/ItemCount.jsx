import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';

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
    if (contador > 0) {
      onAddToCart(contador);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
        background: 'none',
        iconColor: 'red', 
      });
    }
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



































