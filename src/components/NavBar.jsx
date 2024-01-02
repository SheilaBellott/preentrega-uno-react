import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Input
} from '@chakra-ui/react'






const NavBar = () => {
  return (
  
    <div className='nav-bar'>

      <h1 className="tittle-cell">FG</h1>
      <h2 className="tittle-infinity">Muebleria</h2>
      <Link to={`/`}>
      <p className="nav-p">inicio</p>
      </Link>
      <p className="nav-p">nosotros</p>

    <Menu>
  <MenuButton >
    Actions
  </MenuButton>
  <MenuList>

  <Link to={'/categoria/Mesa'}>
<MenuItem pl="15px" pr="1.1rem">Mesas</MenuItem>
</Link>

<Link to={'/categoria/Zapatero'}>
<MenuItem pl="15px" pr="1.1rem">Zapateros</MenuItem>
</Link>

<Link to={'/categoria/Silla'}>
<MenuItem pl="15px" pr="1.1rem">Sillas</MenuItem>
</Link>


  </MenuList>
</Menu>

    <p className="nav-p">contacto</p>
    <Input ml="33rem" width={"10%"} height={"10%"} placeholder='Buscar productos' />
   
    <CartWidget />
  
    </div>
    
  )
}

export default NavBar