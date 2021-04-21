import React, { useState } from "react";
import "./WhosThatPokemon.css";

import TvSet from "./TvSet";
import PokeRange from "./PokeRange";
import PokeGuess from "./PokeGuess";

const WhosThatPokemonContainer = () => {
  //
  const [misteryPokemon, setMisteryPokemon] = useState({
    id: 180,
    found: true,
  });

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-center text-2xl mb-8">Who's That Pokémon?</h1>
      <TvSet pokemon={misteryPokemon} />
      <div className="mt-8 grid divide-x-0 divide-y divide-gray-300 sm:divide-x sm:divide-y-0 sm:grid-cols-2 px-8">
        <div className="pb-8 sm:pr-8 sm:pb-0">
          <PokeRange />
        </div>
        <div className="pt-8 sm:pl-8 sm:pt-0">
          <PokeGuess />
        </div>
      </div>
    </div>
  );
};

export default WhosThatPokemonContainer;
