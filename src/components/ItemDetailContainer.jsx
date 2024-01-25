import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProductoDesdeFirebase = async () => {
      const db = getFirestore();
      const productoDoc = doc(db, 'productos', productoId); 
      const productoSnapshot = await getDoc(productoDoc);
      if (productoSnapshot.exists()) {
        setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
      }    
    };

    obtenerProductoDesdeFirebase().catch((error) => {
      console.error('Error al obtener producto desde Firebase:', error);
    });
  }, []);

  return (
    <div>
      {producto && <ItemDetail producto={producto} />}
    </div>
  );
};

export default ItemDetailContainer;

