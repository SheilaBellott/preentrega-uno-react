import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)


    const sumar = () => {
        if (contador < 10){
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }




  return (
    <div>
        <Button borderRadius={"10px"}  onClick ={restar}>
         -
        </Button>  
        <Button borderRadius={"5px"} >
           Agregar al carrito{contador}
       </Button>
       <Button borderRadius={"10px"}   onClick ={sumar}>
       +
       </Button>
    </div>
  )
}

export default ItemCount