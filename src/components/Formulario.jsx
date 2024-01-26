import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Formulario = ({ productosSeleccionados }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrdenId] = useState("");

  const db = getFirestore();

  const handlenSubmit = (e) => {
    e.preventDefault();

    const order = {
      cliente: { nombre, email },
      items: productosSeleccionados,
    };

    const ordersCollection = collection(db, "orden");

    addDoc(ordersCollection, order)
      .then(({ id }) => setOrdenId(id))
  };

  return (
    <div className="form">
        <h3>Ingrese sus datos</h3>
      <form onSubmit={handlenSubmit} >
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>Pedido: {orderId}</p>
    </div>
  );
};

export default Formulario;
