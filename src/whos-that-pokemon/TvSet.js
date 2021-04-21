import React, { useState, useEffect } from "react";

import tvSet from "./images/tv-set.png";
import staticNoise from "./images/static-noise.gif";
import poke1 from "./images/poke1.gif";
import poke2 from "./images/poke2.gif";

const generatePokeApiUrl = (pokemonId) =>
  `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

const formatPokemonData = (rawPokemonData) => ({
  id: rawPokemonData.id,
  name: rawPokemonData.name,
  img: `https://pokeres.bastionbot.org/images/pokemon/${rawPokemonData.id}.png`,
});

const fetchCleanPokemonData = async (pokemonId) => {
  const response = await fetch(generatePokeApiUrl(pokemonId));
  const rawPokemonData = await response.json();
  console.log(rawPokemonData);
  const pokemonData = formatPokemonData(rawPokemonData);
  console.log(pokemonData);
  return pokemonData;
};

export default function TvSet({ pokemon }) {
  //
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetchCleanPokemonData(pokemon.id)
      .then((data) => setPokemonData(data))
      .catch(console.log);
  }, [pokemon]);

  return (
    <div className="w-full">
      <div className="relative">
        <img src={tvSet} alt="old tv set" className="absolute z-50 w-full" />
        {/* <img src={staticNoise} alt="static noise" className="absolute z-40 w-full" /> */}
        <div className="absolute flex w-full h-full z-10">
          {pokemonData.img && (
            <img
              src={pokemonData.img}
              alt="static noise"
              className={`w-1/4 poke-position self-center filter transition ${
                pokemon.found ? "" : "brightness-0"
              }`}
            />
          )}
        </div>
        {/* <img src={poke2} alt="static noise" className="absolute z-0 w-full" /> */}
        <img src={poke1} alt="static noise" className="z-0 w-full" />
      </div>
    </div>
  );
}
