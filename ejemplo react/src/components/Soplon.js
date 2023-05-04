import React from 'react'

export default function Soplon() {
    const handleChange = (e)=>{
        console.log(e.target.name);
    }

  return (
    <div>
      <input type='text' name='buscador' onChange={handleChange} />
    </div>
  )
}
