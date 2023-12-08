import React from 'react'
import { useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";


const CartWidget = () => {  

  const [contador, setContador] = useState(0)

  console.log(contador)


  return (
    <>
    <div className="nav-cart">
    <HiOutlineShoppingCart />
      <small>{contador}</small>
      </div>
    </>
  )
}

export default CartWidget