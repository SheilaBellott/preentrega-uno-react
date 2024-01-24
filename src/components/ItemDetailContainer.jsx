import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
  const { productoId } = useParams()

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