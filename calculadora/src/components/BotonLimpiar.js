import React from 'react'
import '../css/botonLimpiar.css'

const BotonLimpiar = (props) => {
  return (
    <div onClick={()=>props.borrar(props.children)} className='boton-limpiar'>{props.children}</div>
  )
}

export default BotonLimpiar;