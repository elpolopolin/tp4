import React from 'react'
import Formulario from './Formulario'
export default function Citas() {


//intento de sacar los valores que saque en formulario para ponerlos en este componente pero no se como
const prueba = (event) => {
    const mascota = Formulario.mascota;
    console.log("indones " + mascota);
}

            return (

                
                <div className="cita">
                <p>Mascota: <span></span></p>
                <p>Dueño: <span></span></p>
                <p>Fecha: <span></span></p>
                <p>Hora: <span></span></p>
                <p>Sintomas: <span></span></p><button onClick={prueba} className="button elimnar u-full-width">Eliminar x</button></div>



            )
}