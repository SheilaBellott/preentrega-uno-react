import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'; 
import CartWidget from './CartWidget';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  flexbox,
} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1 className="tittle-cell">FG</h1>
      <h2 className="tittle-fg">Muebleria</h2>
      <Link to={`/`} >
        <p className="nav-p" >Inicio</p>
      </Link>
      <p className="nav-p">Nosotros</p>
      <div className='menu-nav'>
        <Menu>
          <MenuButton border={'none'} className='nav-p-color'>
            Categorias
          </MenuButton>
          <MenuList zIndex="10" display="flex" position="relative" right="34%">
            <Link to={'/categoria/mesas'}>
              <MenuItem pl="15px" pr="1.1rem" className='menu-list' justifyContent="center" color="#FFFFFF" >Mesas</MenuItem>
            </Link>
            <Link to={'/categoria/zapateros'}>
              <MenuItem pl="15px" pr="1.1rem" className='menu-list' justifyContent="center" color="#FFFFFF">Zapateros</MenuItem>
            </Link>
            <Link to={'/categoria/sillas'}>
              <MenuItem pl="15px" pr="1.1rem" className='menu-list' justifyContent="center" color="#FFFFFF">Sillas</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <p className="nav-p">Contacto</p>
        <Search /> 
        <CartWidget/>
      </div>
    </div>
  );
}

export default NavBar;
