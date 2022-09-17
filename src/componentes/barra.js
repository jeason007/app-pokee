import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';

const BarraNavegacion = () => {

//crear estado para recibir los datos de l api
const [ filtro, setFiltro] = useState([]);
//crear estado , guardar el evento del usuario.....
const [ es, setEs] = useState("");
//crear la funcion para conectar ala api
const elemento = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
    .then(resp =>{
        for(let i=0; i < resp.data.results.length; i++){
            axios.get(resp.data.results[i].url)
            .then(result =>{
                setFiltro(preArray => [...preArray, result.data])
            }).catch((console.error("sin conexion....")))
        }
    })
}
//console.log(filtro) 
//usar useEffect para montar la api  y asignar la funcion........ asignar[] para no tener un bucle infinito.....
useEffect(()=>{
    //funcion...
    elemento();
},[])
//capturar el evento al llenar el input......
const capturarEvento = (e)=>{
    setEs(e.target.value);
  //console.log(es);
  }


    return(
        <>
        <div className="">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Search element</button>
        <button class="btn btn-primary" type="button">gold pokemon</button>
        <button class="btn btn-primary me-md-2" type="button">features</button>
        <button class="btn btn-primary" type="button">download</button>
        </div>
        </div>
        <div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" >
        <h5 className="modal-title" id="exampleModalLabel">
        <p className="buscar">Search element pokemon only....</p>
        <input type="text" onChange={capturarEvento}  class="form-control"  placeholder="Search Pokemon for element..." aria-label="Recipient's username" aria-describedby="button-addon2" />
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal">
        {
            filtro.filter(newPoke=>newPoke.types[0].type.name.toLowerCase().includes(es)).map((elemen , idx)=>(
                <><center>
                
                <div class="card" id="image-card" key={idx + 1}>
               <img src={elemen.sprites.front_default} class="card-img-top" alt="..." id="elemento-foto"/>
                <div className="card-body">
               <h5 className="card-title">{elemen.name}</h5>
              <p className="card-text">{elemen.types[0].type.name}</p>
              
             </div>
              </div>
              
              </center>
                </>
            ))
        }

       
      </div>
      
    </div>
  </div>
</div>
        </div>
        </>


    )

}
export default BarraNavegacion;