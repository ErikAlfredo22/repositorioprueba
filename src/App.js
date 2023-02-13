import './App.css';
import Testimonio from './Componentes/Testimonio';
import Tarjeta from './Componentes/Tarjeta'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Erik Alfredo Aguilar Ramirez'
          pais='Mexico'
          imagen=''
          cargo='Ingeniero en desarrollo web'
          empresa='Softec'
          testimonio='quiero seguir aprendiendo react y todo lo demas'
        />
        <Testimonio
        nombre='Alan Rodolfo Ruiz Santillan'
        pais='Mexico'
        imagen=''
        cargo='Ingeniero hola'
        empresa='gato azul'
        testimonio='Quiero aprender a programar gentai'
        />

        
      </div>
      

      <section>
      <Tarjeta
      Titulo='Xbox One'
      Descripcion='Modelo 2013'
      costo='2500'
      />
      <Tarjeta
      Titulo='Xbox Series S'
      Descripcion='Modelo 2018'
      costo='4999'
      />
      </section>
      
    </div>
  );
}

export default App;


