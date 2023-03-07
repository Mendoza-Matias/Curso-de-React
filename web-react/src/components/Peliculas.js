import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import '../css/Movie.css'
import { get } from '../utils/Cliente';

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const Peliculas = () => {
  
  const [informacion,setInformacion] = useState([])
 
  const query = useQuery();
  const search = query.get("search");

  //LLamada asincrona
  useEffect(()=>{
    //ACA CREO UN OPERADOR TERNARIO EN EL CUAL LE DIGO QUE SI NO HAY NADA INGRESADO ME MUESTRE TODO Y SI LE INGRESO UN VALOR HAGA UNA CONSULTA A LA BASE DE DATOS POR DICHA INFORMACIÓN
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie" 
    //Funcion exportada
    get(searchUrl)
    
    //Recibo la data y la guardo en mi variable , voy a la parte de results
    .then(data => {

      //Esto lleva el valor y lo modifica en informacion
      setInformacion(data.results);

    });
    //Siempre colocar un arreglo vacio para evitar que se genere un bucle infinito y que mi fetch se ejecute una sola vez al cargar mi componente.Corto el flujo de vida de mi componente
},[search]);
  //Efecto secundario para hacer llamadas asincronas
  const url = 'https://image.tmdb.org/t/p/w300';
  return (
    <div className='peliculas'>
        {informacion.map((pelicula)=>{
            return(
            //Link de mi aplicacion para que me lleve a una pelicula
            <Link to={'/movie/'+ pelicula.id}>
            <div className='card'>  
            <img src={`${url}` + pelicula.poster_path} alt={pelicula.title}/>
            <li key={pelicula.id}><strong className='peliculas_title'>{pelicula.title}</strong></li>
            </div>
            </Link>
            )
            
        })}
    </div>
  )
}

export default Peliculas