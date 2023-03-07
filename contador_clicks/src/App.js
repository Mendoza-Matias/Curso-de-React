import './App.css';
import Boton from './component/Boton';
import Contador from './component/Contador';
import logo from './images/logo.png';

//Estado
import {useState} from 'react';

//Aplicar el estado
function App() {

  const [clics, setClics] = useState(0);
  
  //Funciones
  const manejarClic = () =>{
   setClics(clics + 1);
   //Actualizo mi numero de click
  };

  const reiniciarClic = () =>{
    setClics(0);
  };

  const restarClic = () =>{
    setClics(clics -1)
    if(clics < 1){
      setClics(0)
    }
  }

  return (
    <div className="App">
    <div className='contenedor-logo'>
      <h1>Contador de Click <strong className='strong'>By Matias..</strong></h1>
      <img className='logo' src={logo} alt=''/>
    </div>
    <div className='contenedor-contador'>
    <Contador click={clics}/>
    </div>
    <div className='contenedor-botones'>
    <Boton 
    texto='Clic'
    esBotonDeClic={true}
    manejarClic={manejarClic}/>
     <Boton 
    texto='Restar Clic'
    esBotonDeClic={true}
    manejarClic={restarClic}
    />
    <Boton 
    texto='Reiniciar'
    esBotonDeClic={false}
    manejarClic={reiniciarClic}
    />
    </div>
    </div>
  );
}

export default App;
