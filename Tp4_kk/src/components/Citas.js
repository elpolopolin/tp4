import React from 'react'
import { useState } from 'react';
import Formulario from './Formulario';
import datos2 from './Formulario'


export default function Citas({ citas, eliminarCita}) {
    
    const [datos, estableceDatos] = useState([]);

    const handleEliminarCita = (id) => {
        eliminarCita(id)
    }

    return (

        <>
            {
                citas.map(cita => (
                    
                    
                        <div className="cita" key={cita.Id}>
                            <p>Mascota: <span>{cita.Mascota}</span></p>
                            <p>Dueño: <span>{cita.Propietario}</span></p>
                            <p>Fecha: <span>{cita.Fecha}</span></p>
                            <p>Hora: <span>{cita.Hora}</span></p>
                            <p>Sintomas: <span>{cita.Sintomas}</span></p><button onClick={() =>handleEliminarCita(cita.Id)} className="button elimnar u-full-width">Eliminar x</button></div>
                    
                ))
                


            }
            

        </>
    )
}