
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Contenido from './components/Contenido';
import Page from './components/Page';

//Armado del ruteo de mi aplicación
const router = createBrowserRouter(
[
  {
  path:'/',
  element:<Contenido/>
  },
  {
    path:'/movie/:id',
    element:<Page></Page>
  },
  
])

function App() {
  return (
<div>
    <RouterProvider router={router}/>
</div>
  );
}

export default App;
