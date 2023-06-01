import React from 'react'
import { useState } from 'react';
import Citas from './Citas'; //hijo
import { eventWrapper } from '@testing-library/user-event/dist/utils';
// import {useForm} from "react-hook-form"  Libreria para usar forms pero cre oq no se podia usar asi que la achie.

export default function Formulario({onAgregarCita}) {
    //hacer con hook copiar de practica de flecha subida en home 5ib efsi
        const [datos, estableceDatos] = useState([]);
        
        const [id, setId] = useState(0);
        const [mascota, setMascota] = useState("");
        const [propietario, setPropietario] = useState("");
        const [fecha, setFecha] = useState(new Date());
        const [hora, setHora] = useState("");
        const [sintomas, setSintomas] = useState("");

        const data = 
        {Id: id, Mascota:mascota,Propietario:propietario,Fecha:fecha, Hora: hora, Sintomas: sintomas}
        ;

      const handleForm = (event) => {
       
        event.preventDefault();
       
        if (mascota === "" || propietario === "" || fecha === "" || hora === "" || sintomas === "")
        {
          console.log("error");
          setId(id - 1);
        }
        else {
           
          onAgregarCita(data);   
        }
       
      }

    
  
      
  return (

    <div>
      
        <form onSubmit={handleForm}>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" onChange={(e) => setMascota(e.target.value)} id='nombreMascota' className='u-full-width' placeholder="Nombre Mascota" />
          <label>Nombre Dueño</label>
          <input type="text" name="propietario" onChange={(e) => setPropietario(e.target.value)} id='nombreDueño' className='u-full-width' placeholder="Nombre dueño de la mascota" />
          <label>Fecha</label>
          <input type="date" name="fecha" onChange={(e) => setFecha(e.target.value)} id='Fecha' className='u-full-width' />
          <label>hora</label>
          <input type="time" name="hora" onChange={(e) => setHora(String(e.target.value))}  id='Hora' className='u-full-width' /> 
          <label>Sintomas</label>
          <textarea name="sintomas" onChange={(e) => setSintomas(e.target.value)} id='Sintomas' className="u-full-width"></textarea> 
          <button type="submit" onClick={() => setId(id + 1)} className="u-full-width button-primary">Agregar Cita</button>
        </form>
        
    </div>


  )
  }

