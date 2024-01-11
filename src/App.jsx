import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Flex } from '@chakra-ui/react';
const App = () => {

  return (
  <BrowserRouter>
  
    <NavBar/>
<Flex className='flex-app'>

<Routes>
  <Route exact path='/' element={<ItemListContainer/>}/>
  <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
  <Route exact path='/producto/:productoId'element={<ItemDetailContainer/>}/>
</Routes>
</Flex>

    </BrowserRouter>

  )
}

export default App