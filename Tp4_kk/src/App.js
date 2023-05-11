import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";
function App() {


  return (
    <>
   <div>
	<h1>ADMINISTRADOR DE PACIENTES</h1>
	<div className="container">
		<div className='row'>
			<div className="one-half column">
				<h2>Crear mi Cita</h2>
				<Formulario/>

			</div>
			<div className="one-half column">
				<h2>Administra tus citas</h2>
				 <Citas/>
        </div>
		</div>
	</div>
  </div>
    </>
        );
}

        export default App;
