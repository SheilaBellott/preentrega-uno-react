import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input
} from '@chakra-ui/react'






const NavBar = () => {
  return (
  
    <div className='nav-bar'>

      <h1 className="tittle-cell">FG</h1>
      <h2 className="tittle-fg">Muebleria</h2>
      <Link to={`/`} >
      <p className="nav-p"  >inicio</p>
      </Link>
      <p className="nav-p">nosotros</p>
<div className='menu-nav'>
    <Menu >
  
  <MenuButton border={'none'} className='nav-p-color'   >
    Categorias
  </MenuButton>
  <MenuList zIndex="10" >

  <Link to={'/categoria/mesas'}>
<MenuItem pl="15px" pr="1.1rem" className='menu-list'>Mesas</MenuItem>
</Link>

<Link to={'/categoria/zapateros'}>
<MenuItem pl="15px" pr="1.1rem" className='menu-list'>Zapateros</MenuItem>
</Link>

<Link to={'/categoria/sillas'}>
<MenuItem pl="15px" pr="1.1rem" className='menu-list'>Sillas</MenuItem>
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