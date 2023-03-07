import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Movie.css'



const Buscador = () => {
    //Estado para el evento del input
    const [input, setInput] = useState("")
    const navigate = useNavigate()


    //Capturo el evento submit y previene la recarga del formulario
    
    const inputChange = (e)=>{
      //Paso el valor al set input
      setInput(e.target.value);
      //Adquiere el valor del input
      navigate("/?search=" + e.target.value);
    };

    const handleSubmit = (e) =>{
      e.preventeDefault();   
  };

  return (
    <div className='contain_buscador'>
        <form className='buscador' onSubmit={handleSubmit}>
        
        <input type='text' placeholder='Buscar' value={input} onChange={inputChange}/>
        
        <button type='submit'>🔎</button>
        </form>
    </div>
  )
}

export default Buscador

//Cada vez que voy ingresando un valor nuevo en el input se va