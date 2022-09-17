import React, { useState } from "react";

const  NewView = (props) => {
const {pokemon} = props;
//console.log(pokemon);
const [ estado, setEstado ] = useState("");
//evento para capturar valor... al typear en el input.....
  const handleChange = (e)=>{
    setEstado(e.target.value);
  // console.log();
  }

    return(

        <><br/>
        <div>
        <input type="text"  onChange={ handleChange} class="form-control"  placeholder="Search Pokemon..." aria-label="Recipient's username" aria-describedby="button-addon2" id="input"/>
        </div><br/>
        <div className="container" >
            {
                pokemon.filter(newPoke=>newPoke.name.toLowerCase().includes(estado)).map((newPoke ,idx)=>(
                    <>
                    <div class="card mb-3" key={idx + 1}>
                    <div class="row g-0" id="cont">
                    <div class="col-md-4" id="imgh">
                    <div className="id">{newPoke.id}</div>
                    <img src={newPoke.sprites.front_default} class="img-fluid rounded-start" alt={newPoke.name}/>
                   </div>
                   <div class="col-md-8">
                   <div class="card-body" id="card_body">
                   <h5 class="card-title" id="title-card">{newPoke.name}</h5>
                   <div className="card-footer text-muted" id="caracteristicas"><h6 className="name">pokemon skills</h6>{newPoke.abilities[0].ability.name}</div>
           <div className="card-footer text-muted"id="caracteristicas"><h6 className="name">pokemon element</h6>{newPoke.types[0].type.name}</div>
           <div className="card-footer text-muted"id="caracteristicas"><h6 className="name">
pokemon attack</h6>{newPoke.stats[5].stat.name}</div>
      </div>
    </div>
  </div>
</div>
                    </>
                ))
            }
        </div>
        </>
    )
}
export default NewView;