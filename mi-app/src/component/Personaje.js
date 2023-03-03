//Lo primero en crear.
import React from 'react'
import '../style/personaje.css'

//Para hacerlo mas rapido utilizar rafc.
function Personaje (props){
  return(
    <div className='contenedor-personaje'>
      <img className='imagen-personaje' src={require(`../images/${props.imagen}`)} alt='Foto personaje' />
      <div className='contenedor-texto'>
        <p className='nombre-personaje'><strong>{props.nombre}</strong></p>
        <p className='nombre-serie'>{props.serie}</p>
        <div className='contenedor-parrafo'>
        <p className='texto-personaje'>{props.texto}</p>
        </div>
      </div>
    </div>
  )};

export default Personaje;
//Siempre exportar mi componente.
/*Exportación por defecto : cuando sea un unico elemento que se va a exportar.
Exportación nombrada : varios elementos de un archivo.*/