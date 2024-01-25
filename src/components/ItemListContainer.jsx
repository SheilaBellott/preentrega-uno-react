import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductosDesdeFirebase = async () => {
      const db = getFirestore();
      const productosCollection = collection(db, 'productos'); 
      const querySnapshot = await getDocs(productosCollection);
      const productosData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(productosData);
    };

    obtenerProductosDesdeFirebase().catch((error) => {
      console.error('Error al obtener productos desde Firebase:', error);
    });
  }, []);

  const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaId);

  return (
    <div>
      {categoriaId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;

