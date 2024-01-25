import { useState } from "react";
import { collection, addDoc ,getFirestore } from "firebase/firestore";

const Formulario = ()=> {
    const Cart = [
        {p: "producto a"},
        {p: "producto b"}
    ]
const [nombre, setNombre] = useState("")
const [email, setEmail] = useState ("")
const [orderId, setOrdenId] = useState ("")

const db = getFirestore()
const handlenSubmit = (e) => {
    e.preventDefault()
    
    addDoc(ordersCollection, order).then (({id}) =>
    setOrdenId(id))
}

const order = {
    cliente: {nombre, email},
    items: cart,
}

const ordersCollection = collection(db, "orden")

return(
    <div>
        <form onSubmit={handlenSubmit}>
            <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
            <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} value={email} />
            <button type="submit">Enviar</button>
        </form>
        <p>{orderId}</p>
    </div>
)
}
export default Formulario