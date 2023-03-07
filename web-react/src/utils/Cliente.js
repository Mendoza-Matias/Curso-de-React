const Api = "https://api.themoviedb.org/3"

export function get(path){
  return fetch( Api + path,{
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2RiODk3ZTBiNDg2MzgxY2Q2Zjk4MDRlZDhmYjllNyIsInN1YiI6IjYzZjkzMWUyMzQ0YThlMDBlNmNkMzY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ajBJ7irnNDpSJSdNlFUH23cFTo003H5JoQGPj50IzUU",
      "Content-Type":"application/json;charset=utf-8",
      },
      //Convierto el resultado a json
    }).then(resultado => resultado.json())
}

//Aca lo que estoy haciendo es exportar mi funcion fetch ya que como la voy a reutilizar es conveniente llevarla a una hoja externa y llamarla cuando la quiero utilizar