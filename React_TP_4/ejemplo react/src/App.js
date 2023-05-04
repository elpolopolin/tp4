import Navbar from "./components/Navbar";
import PersonaListado from "./components/PersonaListado";
import Soplon from "./components/Soplon";

function App() {
  const listado = [
    {id:1,titulo:'titulo 1',descripcion:'descripcion 1'},
    {id:2,titulo:'titulo 2',descripcion:'descripcion 2'},
    {id:3,titulo:'titulo 3',descripcion:'descripcion 3'},
    {id:4,titulo:'titulo 4',descripcion:'descripcion 4'}
    ];

  return (
      <>  
        <Soplon/>  
        <Navbar />
        <PersonaListado categoria="Mas vendidos" listado={listado} />          
        <PersonaListado categoria="Destacados" listado={listado} />                  
      </>
  );
}

export default App;
