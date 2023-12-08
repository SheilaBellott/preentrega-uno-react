import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'
const App = () => {
  return (
    <>
    <NavBar/>
    <div>
      <ItemListContainer greeting= {"Bienvenidos a infinity cellphone"}/>
    </div>
    </>
  )
}

export default App