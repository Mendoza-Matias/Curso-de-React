import React from 'react';
import Buscador from './Buscador';
import Estructura from './Estructura';
import TItulo from './TItulo';


const Contenido = () => {
  return (
    <div>
      <header>
      <TItulo/>
    </header>
    <Buscador/>
    <main>
      <Estructura></Estructura>
    </main>
        
    </div>
  )
}

export default Contenido