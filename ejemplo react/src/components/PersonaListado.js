import React from 'react'
import Persona from './Persona';

export default function PersonaListado({listado,categoria}) {
  return (
    <div className="container-fluid">
        <div className='row'>
            <div className='col-12'>
                <h1>{categoria}</h1>
            </div>
        </div>
        <div className="row">
          {listado.map((item,index)=>(
            <div key={index} className="col-3">
              <Persona 
                titulo={item.titulo}
                descripcion={item.descripcion}
              />
            </div>          
          ))}
        </div>
      </div>
  )
}
