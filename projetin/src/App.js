import { useState } from 'react';
import './App.css';
import Card from './components/Card';



function App() {

  const [count, setCounter] = useState(1);
  const [pokemon, setPokemon] = useState(0);

  function request(){
    fetch("https://pokeapi.co/api/v2/pokemon/" + count)
    .then(response => response.json())
    .then(objeto => setPokemon(objeto))
  }

  function contador(){
    setCounter(count + 1)
    request();

  }

  return  (pokemon.sprites ?
  <div className="App">
    {(count > 0) ? <Card 
    image={pokemon.sprites.front_default} 
    nome={pokemon.name} 
    tipo={pokemon.stats[0].base_stat}
    altura={pokemon.stats[1].base_stat}
    peso={pokemon.stats[2].base_stat}
    /> : null}
    <button onClick={contador}>Proximo</button>
  </div>
  :
  <div>
    <button onClick={contador}>Proximo</button>
  </div>
  ) 
}

export default App;
