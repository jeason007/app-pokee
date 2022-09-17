//import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import Foto from './componentes/foto';
import NewView from './componentes/nuevaVista';
import BarraNavegacion from './componentes/barra';
import axios from 'axios';


function App() { 

  //crear estado para recibir los datos de l api
const [ pokemon , setPokemon] = useState([]);
//crear la funcion para conectar ala api
const loadData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(resp =>{
        for(let i=0; i < resp.data.results.length; i++){
            axios.get(resp.data.results[i].url)
            .then(result =>{
                setPokemon(preArray => [...preArray, result.data])
            }).catch((console.error("no funciona")))
        }
    })
}
//usar useEffect para montar la api........ asignar[] para no tener un bucle infinito.....
useEffect(()=>{
    loadData();
 
},[])
return (
    <div className="App">
     <div className='contenedor-foto'>
      <Foto/>
     </div>
     <div className="menu">
      <BarraNavegacion />
     </div>
      <div className="targetas">
        <NewView pokemon={pokemon}/>
      </div>
      <div className="head">
      <p className='pie-de-pagina'>PokeApi.v2&nbsp;&nbsp;
      <span class="material-symbols-outlined" id="es">grade</span>
      <span class="material-symbols-outlined" id="es">grade</span>
      <span class="material-symbols-outlined" id="es">grade</span>
      <span class="material-symbols-outlined" id="es">grade</span>
      </p>
      
       </div>
      
       </div>
  );
}

export default App;
