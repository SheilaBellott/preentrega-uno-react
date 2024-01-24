import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

  const {categoriaId} = useParams()

  const productos = [
    {id:1, titulo:"zapatero x3", descripcion:  "descripcion de producto", precio:1600, categoria: "Zapateros"},
    {id:2, titulo:"zapatero x6", descripcion: "descripcion de producto", precio:2200, categoria: "Zapateros"},
    {id:3, titulo:"mesa de 120cm", descripcion: "descripcion de producto", precio:3200, categoria: "Mesas"},
    {id:4, titulo:"mesa de 140cm", descripcion:  "descripcion de producto", precio:4100, categoria: "Mesas"},
    {id:5, titulo:"silla de pino", descripcion: "descripcion de producto", precio:1000, categoria: "Sillas"},
    {id:6, titulo:"silla capitone", descripcion: "descripcion de producto", precio:3900, categoria: "Sillas"}
    
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