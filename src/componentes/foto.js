import React from 'react';

const Foto = ()=>{
    //crear variables para asignar imagenes.........
    var Url ="https://w7.pngwing.com/pngs/282/481/png-transparent-pokemon-pokeball-illustration-pikachu-ash-ketchum-pokemon-pokeball-pokemon-johto-technology.png"
    var letra ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";


    return(
        <>
        <div>
                <img src={Url} alt="poke-bola" className="logo"/>
                <img src={Url} alt="poke-bola" className="logo2"/>
                <img src={letra} alt="poke-bola" className="letra"/>
                

            </div>
        </>
    )


}
export default Foto;