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
      <Link to={`/`} >
      <p className="nav-p"  >inicio</p>
      </Link>
      <p className="nav-p">nosotros</p>
<div className='menu-nav'>
    <Menu >
  
  <MenuButton border={'none'} className='nav-p-color'   >
    Categorias
  </MenuButton>
  <MenuList className='menu-list'>

  <Link to={'/categoria/Mesas'}>
<MenuItem pl="15px" pr="1.1rem" >Mesas</MenuItem>
</Link>

<Link to={'/categoria/Zapateros'}>
<MenuItem pl="15px" pr="1.1rem" className='menu-list'>Zapateros</MenuItem>
</Link>

<Link to={'/categoria/Sillas'}>
<MenuItem pl="15px" pr="1.1rem">Sillas</MenuItem>
</Link>


  </MenuList>
</Menu>

    <p className="nav-p">contacto</p>
    <Input className='input'  width={"10rem"} height={"10%"} placeholder='Buscar productos' />
   
    <CartWidget/>
  
</div>
    </div>
    
  )
}

export default NavBar