import React from 'react'
import '../css/boton.css'

const Boton = (props) => {

  const esOperador = valor =>{
    return isNaN (valor) && (valor !== '.') && (valor !== '=')
  };

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': null}`}
   onClick={()=>props.manejarClic(props.children)}>
     
      {props.children}
    </div>
  )
}

export default Boton;

//Con children remplazo el valor asignado en el archivo inicial y luego este se va a ver reflejado en mi componente
// onClick={()=>props.manejarClic(props.children)}> siempre es necesario es hacer una funcion anonima