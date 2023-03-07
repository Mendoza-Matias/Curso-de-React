# React 

## Importar imagenes para ser utilizadas

```jsx
    //Rquiero mi imagen y digo donde esta ubicada
    import logo from './images/logo.png'

    function App() {
  return (
    <div className="App">
    <div className='logo'>
      <img className='logo' src={logo} alt=''/>
    </div>
    </div>
  );
}
```
## Sintaxis de desestructuración
```jsx
  //Declaro mi valor como si fuera una variable
  const Boton = ({texto}) => {
  return (
    <button>{texto}</button>
  )
}
```
> Ejemplo de desestructuracion

### Operador ternacio
```jsx
  const Boton = ({texto , esBotonDeClic}) => {
  return (
    //Si es botonDeClic asignale la clase boton-clic , sino asignale la clase boton-reiniciar.
    //Similar a un condicional
    <button className= {esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}>{texto}</button>
  )
}
```
> Ejemplo : Operador ternario
---
### Eventos
```jsx
  const Boton = ({texto , esBotonDeClic , manejarClic}) => {
  return (
    //Evento onClick
    <button className= {esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onclick={manejarClic} >{texto}</button>
    //Le asigno al boton un evento con una funcion pasada como props
    //Funcion manejarClic
  )
}
```

---
## Estados (Hooks)

* useState : permite agregar un estado 

> Ejemplo:

```jsx
  import {useState} from 'react'

//Aplicar el estado
function App() {
  //Valor inicial, Función    valor con el que inicia mi estado
  const [clics, setClics] = useState(0);
  
  //Funciones
  const manejarClic = () =>{
    //Le asigno a la funcion setClics el valor de clics y le digo que por cada clics le sume 1
   setClics(clics + 1);
  };
```