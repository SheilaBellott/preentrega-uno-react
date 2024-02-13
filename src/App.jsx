import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Flex } from '@chakra-ui/react';
import {ShoppingCartProvider} from './context/ShoppingCartContext'
import Cart from './components/Cart'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
const App = () => {

  return (
  <BrowserRouter>
    <ShoppingCartProvider>

    <NavBar/>
   <Carousel/>
      <Flex className='flex-app'>

<Routes>
  <Route exact path='/' element={<ItemListContainer/>}/>
  <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
  <Route exact path='/producto/:productoId'element={<ItemDetailContainer/>}/>
  <Route exact path='/cart' element={<Cart/>} />
  <Route exact path='/nosotros' element={<Nosotros />} />
  <Route exact path='/contacto' element={<Contacto />} />
</Routes>
</Flex>
  <Footer/>
    
  </ShoppingCartProvider>

    </BrowserRouter>

  )
}

export default App
