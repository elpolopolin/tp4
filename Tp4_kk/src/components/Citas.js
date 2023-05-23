import React from 'react'
import Formulario from './Formulario';
import datos2 from './Formulario'


export default function Citas({datos2}) {

const prueba = (event) => {
    const mascota = Formulario.mascota;
    console.log("indones " + datos2.Mascota);
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