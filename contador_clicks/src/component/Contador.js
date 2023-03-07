import React from 'react'
import '../css/Contador.css'

const Contador = ({click}) => {
  return (
    <div className='contador'>
        <p>{click}</p>
    </div>
  )
}

export default Contador;