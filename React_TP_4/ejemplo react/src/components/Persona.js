import React from 'react'

export default function Persona({titulo,descripcion}) {
  const Saludar = (name)=>{
    alert('hola ' + name);
  } 
  
  return (
    <div className="card">
        <img src="https://e7.pngegg.com/pngimages/6/346/png-clipart-simpsons-simpsons.png" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <button onClick={()=>Saludar(titulo)} className="btn btn-primary">Go somewhere</button>
        </div>
    </div>
  )
}
