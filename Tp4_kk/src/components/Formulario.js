import React from 'react'
import { useState } from 'react';
import Citas from './Citas';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
// import {useForm} from "react-hook-form"  Libreria para usar forms pero cre oq no se podia usar asi que la achie.

export default function Formulario() {
    //hacer con hook copiar de practica de flecha subida en home 5ib efsi
    const [datos, estableceDatos] = useState('');



        const [mascota, setMascota] = useState("");
        const [propietario, setPropietario] = useState("");
        const [fecha, setFecha] = useState(new Date());
        const [hora, setHora] = useState("");
        const [sintomas, setSintomas] = useState("");
      
   


      const handleForm = (event) => {
       
        event.preventDefault();

        const data = [
          {Mascota:mascota,Propietario:propietario,Fecha:fecha, Hora: hora, Sintomas: sintomas}
          ];
          estableceDatos(data);

        if (mascota === "" || propietario === "" || fecha === "" || hora === "" || sintomas === "")
        {
          console.log("error");
        }
        else {

          
            
            
            console.log(datos);
            
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
          <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
        
    </div>


  )
  }

