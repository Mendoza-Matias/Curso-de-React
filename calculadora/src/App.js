import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonLimpiar from './components/BotonLimpiar';
import Pantalla from './components/Pantalla';
import {evaluate} from 'mathjs';

function App() {

  const [clic,setClic] = useState('');

  const agregarValor = valor =>{
    setClic(clic + valor);
  };

  const calcularResultado = () =>{
    if(clic){
    setClic(evaluate)
  }
  else{
    alert("Ingresa valores para realizar los calculos")
  }
  }

  return (
    <div className="App">
     <div className='contenedor-principal'>
      <Pantalla input={clic}/>
      <div className='fila'>
        <Boton manejarClic={agregarValor}>1</Boton>
        <Boton manejarClic={agregarValor}>2</Boton>
        <Boton manejarClic={agregarValor}>3</Boton>
        <Boton manejarClic={agregarValor}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarValor}>4</Boton>
        <Boton manejarClic={agregarValor}>5</Boton>
        <Boton manejarClic={agregarValor}>6</Boton>
        <Boton manejarClic={agregarValor}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarValor}>7</Boton>
        <Boton manejarClic={agregarValor}>8</Boton>
        <Boton manejarClic={agregarValor}>9</Boton>
        <Boton manejarClic={agregarValor}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarValor}>0</Boton>
        <Boton manejarClic={agregarValor}>.</Boton>
        <Boton manejarClic={agregarValor}>/</Boton>
      </div>
      <div className='fila'>
        <BotonLimpiar borrar={()=>{setClic('')}}>Borrar</BotonLimpiar>
      </div>
     </div>
    </div>
  );
}

export default App;


// manejarClic={agregarValor} lo paso como una props
// borrar={()=>{setClic('')} lo paso como un props y luego tambien le digo que el parametro lo tome como el valor de props.children