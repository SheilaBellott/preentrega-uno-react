import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
  const { productoId } = useParams()

  const productos = [
    {id:1, titulo:"zapatero", descripcion:  "descripcion de producto", precio:1200, categoria: "Zapatero"},
    {id:2, titulo:"zapatero", descripcion: "descripcion de producto", precio:1200, categoria: "Zapatero"},
    {id:3, titulo:"mesa", descripcion: "descripcion de producto", precio:1200, categoria: "Mesa"},
    {id:4, titulo:"mesa", descripcion:  "descripcion de producto", precio:1200, categoria: "Mesa"},
    {id:5, titulo:"silla", descripcion: "descripcion de producto", precio:1200, categoria: "Silla"},
    {id:6, titulo:"silla", descripcion: "descripcion de producto", precio:1200, categoria: "Silla"}
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
  
  const productoFiltrado = productos.find ((producto) => producto.id == productoId)
   return(
    <div>
      <ItemDetail
      producto= {productoFiltrado}
      />
    </div>
   )



}

export default ItemDetailContainer