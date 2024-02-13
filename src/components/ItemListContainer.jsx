import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Search from './Search'; 

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  
  const [productosFiltrados, setProductosFiltrados] = useState([]); 

  useEffect(() => {
    const obtenerProductosDesdeFirebase = async () => {
      const db = getFirestore();
      const productosCollection = collection(db, 'productos');
      const querySnapshot = await getDocs(productosCollection);
      const productosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
     
      setProductos(productosData);
      setProductosFiltrados(productosData); 
    };

    
    obtenerProductosDesdeFirebase().catch((error) => {
      console.error('Error al obtener productos desde Firebase:', error);
    });
}, []);


  return (
    <div>
    <Search productos={productos} setProductosFiltrados={setProductosFiltrados} />

      <div>
        {categoriaId ? <ItemList productos={productosFiltrados.filter(producto => producto.categoria === categoriaId)} /> : <ItemList productos={productosFiltrados} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
