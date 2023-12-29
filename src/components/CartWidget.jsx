import React from 'react'
import { useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";


const CartWidget = () => {  

  const [contador] = useState(0)


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