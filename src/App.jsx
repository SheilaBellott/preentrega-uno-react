import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {

  return (
  <BrowserRouter>
  
    <NavBar/>

<Routes>
  <Route exact path='/' element={<ItemListContainer/>}/>
  <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
  <Route exact path='/producto/:productoId'element={<ItemDetailContainer/>}/>
</Routes>

    </BrowserRouter>

  )
}

export default App