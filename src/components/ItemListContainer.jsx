import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

  const {categoriaId} = useParams()

  const productos = [
    {id:1, titulo:"zapatero", descripcion:  "descripcion de producto", precio:1200, categoria: "zapatero"},
    {id:2, titulo:"zapatero", descripcion: "descripcion de producto", precio:1200, categoria: "zapatero"},
    {id:3, titulo:"mesa", descripcion: "descripcion de producto", precio:1200, categoria: "Mesas"},
    {id:4, titulo:"mesa", descripcion:  "descripcion de producto", precio:1200, categoria: "Mesas"},
    {id:5, titulo:"silla", descripcion: "descripcion de producto", precio:1200, categoria: "Sillas"},
    {id:6, titulo:"silla", descripcion: "descripcion de producto", precio:1200, categoria: "Sillas"}
    
  ]
  const mostrarProductos = new Promise((resolve,reject)=>{
    
    if(productos.length > 0){
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    }else{
      reject("No se obtuvieron productos")
    }
  })
  mostrarProductos
  .then((resultado) => {
  })
  .catch((resultado)=> {
    console.log(error)
  })
    

const productosFiltrados = productos.filter ((producto) => producto.categoria == categoriaId)
console.log(productosFiltrados)
  return (
    <div>
     
      {
      categoriaId ? <ItemList productos={productosFiltrados}/> : <ItemList productos={productos}/>
      }
    </div>
  )
}

export default ItemListContainer