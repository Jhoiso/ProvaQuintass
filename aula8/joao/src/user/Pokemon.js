import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Pokemon() {
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = React.useState({});

    React.useEffect(() =>{
        Carregar();
    },[]);

    function Carregar() {
        console.log(pokemonId)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
                console.log(pokemon)
            });
}

    return(
        <div>
        <h1> { pokemon.name }</h1>
        {pokemon.sprites && (<div> <img src={pokemon.sprites.front_default}/></div>)}
        </div>
    );
}