import React from 'react'

export default function Formulario() {
    //hacer con hook copiar de practica de flecha subida en home 5ib efsi
   
        const mostrarAlert = () => {
          let Respuesta = [
            {Nombre: document.getElementById("nombreMascota"), NombreDueño: document.getElementById("nombreDueño"), Fecha: document.getElementById("Fecha"), Hora: document.getElementById("Hora"), Sintomas: document.getElementById("Sintomas")}
          ]
          console.log(Respuesta.Nombre);
        };
      

  return (
    <div>
        <form>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" id='nombreMascota' className='u-full-width' placeholder="Nombre Mascota" />
          <label>Nombre Dueño</label>
          <input type="text" name="propietario" id='nombreDueño' className='u-full-width' placeholder="Nombre dueño de la mascota" />
          <label>Fecha</label>
          <input type="date" name="fecha" id='Fecha' className='u-full-width' />
          <label>hora</label>
          <input type="time" name="hora" id='Hora' className='u-full-width' />
          <label>Sintomas</label>
          <textarea name="sintomas" id='Sintomas' className="u-full-width"></textarea> 
          <button type="submit" onClick={()=>mostrarAlert()} className="u-full-width button-primary">Agregar Cita</button>
        </form>
        
    </div>


  )
  }

