import React, { useState } from 'react'

const saludo = () => {
    const [nombreP, setNomberP] = useState("");
    const [mostrarSaludo, setMostrarSaludo] = useState(false);
    const handleAceptar = () => {
        setMostrarSaludo(true)
    };
    return (
        <section>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" 
            id="nombre" 
            value={nombreP}
            onChange={(event) => setNomberP(event.target.value)}/>
            <button onClick={handleAceptar}>Aceptar</button>
            {mostrarSaludo && <h1>Hola, {nombreP || "invitado"}</h1> }
        </section>

    );
};
export default saludo