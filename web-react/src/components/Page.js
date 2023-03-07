import React, { useEffect, useState } from 'react'
import TItulo from './TItulo';
import '../css/Movie.css'
import { useParams } from 'react-router-dom';
import { get } from '../utils/Cliente';

const Page = () => {
  const {id} = useParams();

  //Creo un estado el cual al principio este vacio y luego toma el valor de mi data
  const [page,setPage] = useState(null);

  useEffect(()=>{
  
   get("/movie/" + id).then((data)=>{
    //Page ahora es igual a data
    setPage(data)
   })
  },[id]);

  if(!page){
    return null;
  }

  const url = 'https://image.tmdb.org/t/p/w400';

  return (
    <div className='pages'>
      <TItulo/>
      <div className='pages_contain'>
      <img src={`${url}`+ page.poster_path} alt={page.title}/>
      <div className='colum'>
      <p><strong className='strong'>Titulo: </strong>{page.title}</p>
      <br/>
      <p><strong className='strong'>Genero: </strong>
      {page.genres.map(genero => genero.name).join(', ')}
      </p>
      <br/>
      <p>
      <strong className='strong'>Descripción: </strong> {page.overview}</p>
      </div>
      </div>
    </div>
  )
}

export default Page;