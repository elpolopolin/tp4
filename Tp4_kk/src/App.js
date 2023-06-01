import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";
function App() {

	const [arrayCitas, setArrayCitas] = useState([]);
	

	function agregarCita(cita) {
		setArrayCitas(
			[
				...arrayCitas,
			cita
			
			]	
		)
		console.log(arrayCitas);
	}

	function eliminarCita(idCita){
		
		let nuevoArray = arrayCitas;
		nuevoArray = nuevoArray.filter(cita => cita.Id != idCita)
		setArrayCitas(nuevoArray);
	}

	

	

  return (
    <>
   <div>
	<h1>ADMINISTRADOR DE PACIENTES</h1>
	<div className="container">
		<div className='row'>
			<div className="one-half column">
				<h2>Crear mi Cita</h2>
				<Formulario onAgregarCita={agregarCita}/>

			</div>
			<div className="one-half column ">
				<h2>Administra tus citas</h2>
				 <Citas citas={arrayCitas} eliminarCita={eliminarCita}/>
        </div>
		</div>
	</div>
  </div>
    </>
        );
}

        export default App;
