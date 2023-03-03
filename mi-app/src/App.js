import './App.css';
import Personaje from './component/Personaje';

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
    <h1 className='titulo-serie'>Los simpson</h1>
    <Personaje 
    nombre='Bart'
    imagen='bart.jpg'
    serie='Los simpson'
    texto='Bart tiene diez años y es el primogénito y único hijo varón de Homer y Marge Simpson. Es el hermano mayor de Lisa y Maggie.​'/>
    <Personaje 
    nombre='Homero'
    imagen='homero.jpg'
    serie='Los simpson'
    texto=' Es el padre de la familia protagonista y uno de los personajes centrales más importantes de la serie​'/>
    <Personaje 
    nombre='maggie'
    imagen='maggie.jpg'
    serie='Los simpson'
    texto='Es la tercera hija del matrimonio protagonista, Homer y Marge Simpson, y la más joven de ellos. Sus hermanos mayores son Bart y Lisa Simpson.'/>
    </div>
    </div>
  );
}

export default App;
