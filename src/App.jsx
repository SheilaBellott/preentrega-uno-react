import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Flex } from '@chakra-ui/react';
import {ShoppingCartProvider} from './context/ShoppingCartContext'
import ItemCount from './components/ItemCount'
import Cart from './components/Cart'
const App = () => {

  return (
  <BrowserRouter>
    <ShoppingCartProvider>
  
    <NavBar/>
    

      <Flex className='flex-app'>

<Routes>
  <Route exact path='/' element={<ItemListContainer/>}/>
  <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
  <Route exact path='/producto/:productoId'element={<ItemDetailContainer/>}/>
<Route exact path='/cart' element={<Cart/>} />
</Routes>
</Flex>
  
    
  </ShoppingCartProvider>

    </BrowserRouter>

  )
}

export default App
