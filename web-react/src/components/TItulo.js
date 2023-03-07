import React from 'react'
import {Link} from 'react-router-dom';
import '../css/Movie.css'

const TItulo = () => {
  return (
    <div>
      <Link to={'/'}><h1 className='titulo'>Peliculas</h1>
      </Link>  
      </div>
  )
}

export default TItulo