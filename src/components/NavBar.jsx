import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Input
} from '@chakra-ui/react'








const NavBar = () => {
  return (
    <>
    <Flex align="center" justify="start" bg="#F5F5F5" >
      <h1 className="tittle-cell">FG</h1>
      <h2 className="tittle-infinity">Muebleria</h2>
      <Link to={`/`}>
      <p className="nav-p">inicio</p>
      </Link>
      <p className="nav-p">nosotros</p>
    <Menu>
        <MenuButton fontSize={"0.8rem"} color={"#000000"} bg="#F5F5F5" borderRadius={"none"} border={"none"} pl="20px"> 
         categorias       
        </MenuButton>

        <MenuList pl="10px">
          
          <Link to={'/categoria/mesas'}>
          <MenuItem pl="15px" pr="1.1rem">mesas</MenuItem>
          </Link>
          
          <Link to={'/categoria/zapateros'}>
          <MenuItem pl="15px" pr="1.1rem">zapatero</MenuItem>
          </Link>

          <Link to={'/categoria/sillas'}>
          <MenuItem pl="15px" pr="1.1rem">sillas</MenuItem>
          </Link>      

        </MenuList>

    </Menu>

    <p className="nav-p">contacto</p>

    <Input ml="33rem" width={"10rem"} placeholder='Buscar productos' />
    <CartWidget />
    </Flex>
    </>
  )
}

export default NavBar