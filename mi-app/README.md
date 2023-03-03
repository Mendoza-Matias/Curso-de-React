# React 💻

![React](https://develop.spacemacs.org/layers/+frameworks/react/img/react.png)

## ¿Que es react?

> Es una biblioteca de javascript de codigo abierto diseñado para crear interfaces de usuario.

>Libreria : conjunto de herramientas que podemos utilizar en nuestro codigo. 
React trabaja con componentes y permite reutilizar el codigo. 

---
## Conceptos

> Componente : parte de la interfaz de usuario , reutilizable e independiente ya que tiene su propio estado. Una vez creado se puede reutilizar. HECHO DE ELEMENTOS

* Componentes tipos : De clase y Funcionales

* Funcional : es una funcion de javascript que retorna un elemento en React (JSX).

```jsx
    function Saludo (props){
        return <h1> ¡Hola, {props.nombre}!</h1>
    }
```
> Ejemplo de un componente funcional

### Cosas a tener en cuenta 
* Debe retornar un elemento de React en (JSX).
* El nombre de este debe tener la primer letra en mayuscula.
* props = "Propiedades".

## Props
### ¿Que son?
> Son argumentos que puede recibir mi componente de React. SOLAMENTE PUEDEN SER ENVIARDOS DE PADRES A HIJOS.
---
### Sabias que:
* Podemos tener componentes dentro de otras componentes.
* A travez de las props podemos enviar la información.
* Las props serian algo similar a un objeto en el cual podemos utilizar la notación de puntos.
---
## Estado en React

* Representación de Javascript del conjunto de propiedades de un componente y sus valores actuales. Estos se pueden actualizar.

* Por ejemplo en un contador el estado de este van a ser el numero de Clicks que a este se le den.

## !HOOKS!
* Permite adicionar estados y actualizarlos.
* Es una funcion especial que te permite trabajar con estados de un componente y su vida.

---

## EventListener
> Función que se acciona al suceder un evento en el componente.
---

## Coceptos importantes 
+ Componentes
+ Props
+ Estado
+ Hooks
+ Event Listener

---

## JSX

> JSX es una extensión de React para la sintaxis de javascript , nos permite describir como se veran los componentes usando la estructura de HTML.
### Ventajas
* La estructura es mas facil de visualizar
* Los errores y advertencias son mas faciles de encontrar

```jsx
 const elemento = <h1>¡Hola mundo!</h1>;
```
> Convino HTML con Js

### ¿Que puedo crear con JSX?

* Elementos : mas basicos y sencillos , estructura (Bloques de un componente).

> Se puede utilizar cualquier elemento HTML con JSX

```html
<h1><strong><img><div>
```
> Su representación es distinta en el visual , por eso se pueden visualizar e identificar .
A los elementos se le pueden agregar atributos clase id , pero en JSX la class se escrible como className="". Ya que class es una palabra reservada de Javascript. El for se escribe en JSX de la siguiente manera htmlFor=""

```jsx
<h1 className="h1">Titulo en JSX</h1>
```

## Estilos en JSX

> El atributo style acepta un objeto Javascript escrito en camelCase, por ejemplo : backgroundImage. Primer letra en minuscula , segunda letra mayuscula.

```jsx
    //Le inserto esos valores
    <div style={estiloDiv}>Hola</div>

    //Primer llave inserta javascript , segundas llaves crear objeto. De esta manera se agrega estilo en linea
    <div style={{color:'yellow'}}>Hola de nuevo</div>

    //Creo una constante
    const estiloDiv = {
    color:'yellow',
    backgroundColor:'black'
 };

```
> En JSX los elementos pueden ser anidados , puede haber elementos dentro de elementos , componentes dentro de elementos y componentes dentro de componentes.

```jsx
//Para utilizar reactDom debemos importarlo dentro de nuestro componente
import React from 'react-dom';
const elemento= <h1>Hola </h1>

//Asi renderizo mi elemento en la raiz de mi proyecto.
ReactDom.render(
    elemento,
    //Obtengo la raiz por su id.
    document.getElementById('root')
)
```
> Incluir javascript en JSX
```jsx
//El valor de la variable se va a representar en el componente al ser renderizado
let abjetivo = 'Interesante'

<p>React es {abjetivo} </p>

let a = 5;
let b = 5;
let resultado = (a+b);

<p>El resultado es {resultado}</p>


```
---
## React DOM

> Dom : representación del navegador.

---
## Crear aplicación React
* Abrir terminar ctrl + ñ.
```sh
    npx create-react-app primer aplicación react
    cd mi-app
    npm start
```
---
## Props 

> Nos sirve para hacer que nuestro componente sea reutilizable con otro tipo de contenid.

```jsx
    function Personaje (props){
     <p className='nombre-personaje'>{props.nombre}</p>
```
* Ejemplo de props

### Declaración de props

```jsx
    <Personaje nombre='Bart'
    serie='Los simpson'
    texto='Hijo de Marge y Homero'/>
```
* Esto se debe realizar dentro del elemento que renderiza el componente , en este caso app.js