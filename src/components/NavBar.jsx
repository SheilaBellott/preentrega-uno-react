import React from 'react'
import CartWidget from './CartWidget'
import {ChevronDownIcon, SettingsIcon} from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'






const NavBar = () => {
  return (
    <>
    <Flex align="center" justify="start" bg="#F5F5F5" >
      <h1 className="tittle-infinity">Infinity</h1>
      <h2 className="tittle-cell">cellphone</h2>
      <p className="nav-p">inicio</p>
      <p className="nav-p">nosotros</p>
    <Menu>
        <MenuButton fontSize={"0.8rem"} color={"#000000"} bg="#F5F5F5" borderRadius={"none"} border={"none"} pl="20px"> 
         categorias
          <ChevronDownIcon boxSize={"1rem"}/>
        </MenuButton>
        <MenuList bg="#F5F5F5">
          <MenuItem pr="2.1rem">Iphone</MenuItem>
          <MenuItem>Samsung</MenuItem>
          <MenuItem>Xiaomi</MenuItem>
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