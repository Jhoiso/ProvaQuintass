import React  from "react";
function Card({image, nome, tipo, altura, peso}){

    return(
        <div>
            <div className="card">
                <img src={image} alt="Imagem do Pokémon" />
                <h3> Nome: {nome} </h3>
                <p>Tipo: {tipo}</p>
                <p>Altura: {altura}</p>
                <p>Peso: {peso}</p>
            </div>
        </div>
    )
}
export default Card;